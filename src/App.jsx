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
    };
  }

  getAPI() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((response) => response.json())
      .then((data) => this.setState({ contacts: data }));
  }

  componentDidMount() {
    this.getAPI();
  }

  render() {
    return (
      <>
        <Topbar />
        <Filters />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
