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
      sortAscending: true,
      activeFilter: "name",
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
  }

  getAPI() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ contacts: data, filteredContacts: data });
        this.handleFilters(this.state.activeFilter);
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

  handleFilters = (filterParam) => {
    this.setState({ sortAscending: !this.state.sortAscending });

    let filteredContacts = this.state.filteredContacts.sort((a, b) => {
      if (this.state.sortAscending) {
        return a[filterParam] < b[filterParam] ? 1 : -1;
      }
      return a[filterParam] < b[filterParam] ? -1 : 1;
    });
    this.setState({ filteredContacts });
  };

  render() {
    return (
      <div data-testid="app" className="app">
        <Topbar />
        <Filters
          handleSearchInput={this.handleSearchInput}
          handleFilters={this.handleFilters}
        />
        <Contacts contacts={this.state.filteredContacts} />
      </div>
    );
  }
}

export default App;
