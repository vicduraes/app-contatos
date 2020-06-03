import React, { Component } from "react";
import Topbar from "./components/Topbar/Topbar";
import Filters from "./components/Filters/Filters";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Topbar />
        <Filters />
        <div className="container">
          <section className="contacts">
            <article className="contact">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>
          </section>
        </div>
      </>
    );
  }
}

export default App;
