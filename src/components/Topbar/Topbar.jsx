import React, { Component } from "react";
import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";

import "./Topbar.scss";

class Topbar extends Component {
  render() {
    return (
      <header className="topbar">
        <div className="container">
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Logo Instagram" />
          </a>
        </div>
      </header>
    );
  }
}

export default Topbar;
