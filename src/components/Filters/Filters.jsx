import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

import "./Filters.scss";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      selectedBtn: props.activeFilter,
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(query) {
    this.setState({
      query,
    });
  }

  render() {
    const { handleSearchInput, handleFilters } = this.props;
    return (
      <div data-testid="filters" className="container">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={this.state.query}
              onChange={(e) =>
                this.handleChangeInput(
                  e.target.value,
                  handleSearchInput(e.target.value)
                )
              }
            />

            <button
              className="filters__search__icon"
              onClick={() => handleSearchInput(this.state.query)}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <button
            className={classnames("filters__item", {
              "is-selected": this.state.selectedBtn === "name",
            })}
            onClick={() => {
              handleFilters("name");
              this.setState({ selectedBtn: "name" });
            }}
          >
            Nome
            <FontAwesomeIcon
              className="filters__item__icon"
              icon={faSortDown}
            />
          </button>

          <button
            className={classnames("filters__item", {
              "is-selected": this.state.selectedBtn === "country",
            })}
            onClick={() => {
              handleFilters("country");
              this.setState({ selectedBtn: "country" });
            }}
          >
            País
            <FontAwesomeIcon
              className="filters__item__icon"
              icon={faSortDown}
            />
          </button>

          <button
            className={classnames("filters__item", {
              "is-selected": this.state.selectedBtn === "company",
            })}
            onClick={() => {
              handleFilters("company");
              this.setState({ selectedBtn: "company" });
            }}
          >
            Empresa
            <FontAwesomeIcon
              className="filters__item__icon"
              icon={faSortDown}
            />
          </button>

          <button
            className={classnames("filters__item", {
              "is-selected": this.state.selectedBtn === "department",
            })}
            onClick={() => {
              handleFilters("department");
              this.setState({ selectedBtn: "department" });
            }}
          >
            Departamento
            <FontAwesomeIcon
              className="filters__item__icon"
              icon={faSortDown}
            />
          </button>

          <button
            className={classnames("filters__item", {
              "is-selected": this.state.selectedBtn === "admissionDate",
            })}
            onClick={() => {
              handleFilters("admissionDate");
              this.setState({ selectedBtn: "admissionDate" });
            }}
          >
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
