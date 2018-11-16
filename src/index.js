import React from "react";
import ReactDOM from "react-dom";

import {
  AIR_FILTER_WIDTHS,
  AIR_FILTER_HEIGHTS,
  AIR_FILTER_THICKNESSES
} from "./MockData"

import {GlobalConstants} from "./GlobalConstants";

const Index = () => {
  console.log(AIR_FILTER_WIDTHS);
  console.log(AIR_FILTER_HEIGHTS);
  console.log(AIR_FILTER_THICKNESSES);
  console.log(GlobalConstants);
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("app"));