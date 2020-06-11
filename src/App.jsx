import React, { Component } from "react";
import Topbar from "./components/Topbar/Topbar";
import Filters from "./components/Filters/Filters";
import Contacts from "./components/Contacts/Contacts";
import "./assets/stylesheets/main.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filteredContacts: [],
      sortFilter: true,
      activeFilter: "name",
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  getAPI() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ contacts: data, filteredContacts: data });
      });
  }

  componentDidMount() {
    this.getAPI();
  }

  handleSearchInput(query) {
    const filtered = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query)
    );
    this.setState({ filteredContacts: filtered });
  }

  render() {
    return (
      <>
        <Topbar />
        <Filters handleSearchInput={this.handleSearchInput} />
        <Contacts contacts={this.state.filteredContacts} />
      </>
    );
  }
}

export default App;
