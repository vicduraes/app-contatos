import React, { Component } from "react";
import logo from "../../assets/img/logo.svg";

import "./Topbar.scss";

class Topbar extends Component {
  render() {
    return (
      <header className="topbar">
        <div className="container">
          <a href="/" className="topbar__logo">
            <img src={logo} alt="Logo Instagram" />
          </a>
        </div>
      </header>
    );
  }
}

export default Topbar;
