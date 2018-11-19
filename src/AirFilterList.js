import React from "react";


class AirFilterList extends React.Component {
    render(){
        return(
            <div>
                {this.returnPage()}
            </div>
        )
    }
    returnPage(){
        return(
            <div className="row">
                {this.returnPart()}
            </div>
        )
    }
    returnPart(){
        return(
            <div className="col-6">
                <div className="row">
                    <div className="col-3">
                        <img src="https://via.placeholder.com/130x100"/>
                        <div className="btn bg-white text-primary">
                            View more details
                        </div>
                    </div>
                    <div className="col-9">
                        <div>
                            Accumulair 6.88 x 15.88 x 2 Pleated Replacement Air Filter - MERV 13
                        </div>
                        <label className="container">
                            <input type="radio" name="radio"/>
                            <span className="checkmark"></span>
                            {/* <span className="ml-4">$59.96</span>
                            <span>(4-pack)</span> */}
                        </label>
                         
                        <label className="container mt-4">
                            <input type="radio" name="radio"/>
                            <span className="checkmark"></span>
                            {/* <span className="ml-4">$179.88</span>
                            <span>(12-pack)</span> */}
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
export default AirFilterList;