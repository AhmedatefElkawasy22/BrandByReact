import React, { Component } from "react";

export default class Producte extends Component {
  render() {
    let { id, colorway, imageUrl, model, brand } = this.props.data;
    return (
      <div className="col-md-4 ">
        <div className="border by-3 text-center bg-dark text-light">
          <p>{id}</p>
          <p>{colorway}</p>
          <img className="w-100" src={imageUrl} alt="" />
          <p>{model}</p>
          <p>{brand}</p>
        </div>
      </div>
    );
  }
}
