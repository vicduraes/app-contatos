import React, { Component } from "react";
import Topbar from "./components/Topbar/Topbar";
import Filters from "./components/Filters/Filters";
import Contacts from "./components/Contacts/Contacts";
import "./assets/stylesheets/main.scss";

class App extends Component {
  render() {
    return (
      <>
        <Topbar />
        <Filters />
        <Contacts />
      </>
    );
  }
}

export default App;
