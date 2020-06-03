import React, { Component } from "react";
import Contact from "../Contact/Contact";

import "./Contacts.scss";

class Contacts extends Component {
  render() {
    return (
      <div data-testid="contacts" className="container">
        <section className="contacts">
          <Contact />
        </section>
      </div>
    );
  }
}

export default Contacts;
