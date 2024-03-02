import React, { Component, createRef } from "react";
import Container from "./Container";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      click: "ALL",
      sreachvalue: "",
      myRef: createRef(),
    };
  }
  check = (value) => {
    this.setState({
      click: value,
    });
  };

  mysearch = () => {
    this.setState({
      sreachvalue: this.state.myRef.current.value
    });
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
            <button
              onClick={() => this.check("ALL")}
              className="btn btn-outline-success my-2 my-sm-0 me-2"
            >
              ALL
            </button>
            <button
              onClick={() => this.check("Nike")}
              className="btn btn-outline-success my-2 my-sm-0 me-2"
            >
              Nike
            </button>
            <button
              onClick={() => this.check("Adidas")}
              className="btn btn-outline-success my-2 my-sm-0 me-2"
            >
              Adidas
            </button>
            <button
              onClick={() => this.check("Saucony")}
              className="btn btn-outline-success my-2 my-sm-0 me-2"
            >
              Saucony
            </button>
            <button
              onClick={() => this.check("Vans")}
              className="btn btn-outline-success my-2 my-sm-0 me-2"
            >
              Vans
            </button>
          </ul>

          <form className="form-inline d-flex flex-row ">
            <input
              ref={this.state.myRef}
              className="form-control mr-s m-0 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={() => {
                this.check("search");
                this.mysearch();
              }}
              className="btn btn-outline-success my-2 m-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
        <Container
          valueClik={this.state.click}
          valueSearch={this.state.sreachvalue}
        />
      </>
    );
  }
}
