import React, { Component } from "react";
import Styles from "./Styles.jsx";

export class StyleSelector extends Component {
  constructor(props) {
    super(props);
    // TODO: add state
    // array of all styles for product
    // TODO: don't forget to bind functions and stuff
  }

  // TODO: api call to GET /products/:product_id/styles to get all styles
  // for product and set state to that list

  render() {
    return (
      <div>
        Style Selector
        <Styles />
      </div>
    );
  }
}
// TODO: Pass array of styles to Styles component

export default StyleSelector;
