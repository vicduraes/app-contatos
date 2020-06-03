import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";

import "./Filters.scss";

class Filters extends Component {
  render() {
    return (
      <div data-testid="filters" className="container">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
            />

            <button className="filters__search__icon">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <button className="filters__item is-selected">
            Nome
            <FontAwesomeIcon
              className="filters__item__icon"
              icon={faSortDown}
            />
          </button>

          <button className="filters__item">
            País
            <FontAwesomeIcon
              className="filters__item__icon"
              icon={faSortDown}
            />
          </button>

          <button className="filters__item">
            Empresa
            <FontAwesomeIcon
              className="filters__item__icon"
              icon={faSortDown}
            />
          </button>

          <button className="filters__item">
            Departamento
            <FontAwesomeIcon
              className="filters__item__icon"
              icon={faSortDown}
            />
          </button>

          <button className="filters__item">
            Data de admissão
            <FontAwesomeIcon
              className="filters__item__icon"
              icon={faSortDown}
            />
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;
