import React from "react";
import ReactDOM from "react-dom";
import AirFilterPage from "./AirFilterPage";

import {
  AIR_FILTER_WIDTHS,
  AIR_FILTER_HEIGHTS,
  AIR_FILTER_THICKNESSES
} from "./MockData"

import {GlobalConstants} from "./GlobalConstants";

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      shortSideSelected: false,
      longSideSelected: false,
    };
  }
  startOver(){
    this.setState({
      shortSideSelected: false,
      longSideSelected: false,
    });
  }
  render(){
    console.log(AIR_FILTER_WIDTHS);
    console.log(AIR_FILTER_HEIGHTS);
    console.log(AIR_FILTER_THICKNESSES);
    console.log(GlobalConstants);
    return (
      <div>
        <AirFilterPage/>
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("app"));