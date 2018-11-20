import React from "react";

class AirFilterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdowns: {},
        };
    }
    render() {
        return(
            <React.Fragment>
                {this.returnList()}
            </React.Fragment>
        );
    }
    returnList() {
        return(
            <div className="row mx-1">
                {this.returnPart()}
                {this.returnPart()}
                {this.returnPart()}

            </div>
        );
    }
    returnPart() {
        return(
            <div className="col-6 px-4 mb-2">
                <div className="row mx-0 border">
                    <div className="col-4 pt-4 pr-0">
                        <div className="border d-flex align-content-center">
                            <img className="mx-auto my-3" src="https://via.placeholder.com/80x100"/>
                        </div>
                        <div className="btn bg-white text-primary mt-4 p-0 w-100 justify-content-center">
                            <span className="h4">View more details</span>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="text-primary p-0">
                            <span className="h3 font-weight-bold">
                            Accumulair 6.88 x 15.88 x 2 Pleated Replacement Air Filter - MERV 13
                            </span>
                        </div>
                        <div className="h5 text-muted">
                            Part #1234
                        </div>
                        <div className="row">
                            <div className="col-9 mb-3">
                                <div>
                                    <label className="price-radios">
                                        <input type="radio" className="mb-2" name="radios"/>
                                        <span className="price-radios__checked mt-1">&#9673;</span>
                                        <span className="price-radios__not-checked mt-1">&#9711;</span>
                                        <span className="ml-2 font-weight-bold h2">$59.96</span>
                                        <span className="h4 font-weight-normal ml-2">(4-pack)</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="price-radios">
                                        <input type="radio" name="radios"/>
                                        <span className="price-radios__checked mt-4 py-4">&#9673;</span>
                                        <span className="price-radios__not-checked mt-4 py-4">&#9711;</span>
                                        <span className="ml-2 font-weight-bold h2">$179.88</span>
                                        <span className="h4 font-weight-normal ml-2">(12-pack)</span>
                                    </label>
                                </div>
                            </div>
                            <div className="col-3 px-0 row align-items-end ">
                                <span className="col pr-2 mt-1 d-flex justify-content-end">Qty</span>
                                <input type="text" className="form-control col-4"/>
                            </div>
                        </div>
                        <div className="row mx-0 my-2">
                            <div className="col-8 pl-0 pr-5">
                                <div className="dropdown w-100 px-0">
                                    <div
                                        onClick={this.toggleDropdowns.bind(this, "shortSide")}
                                        className="btn w-100 py-2 text-primary font-weight-bold bg-white border-primary"
                                    >
                                        <span className="h3">Subscription: </span>
                                        <span className="dropdown-toggle  float-right" />
                                    </div>
                                    <div className={`dropdown-content w-100 border ${this.state.dropdowns.shortSide}`}>
                                        <a
                                            className="font-weight-normal btn bg-white"
                                            // onClick={this.handleChange.bind(this, "shortSide")}
                                        >
                                            every 6 months
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="btn btn-secondary col-4">
                                Add to cart
                            </div>
                        </div>
                        <div className="mb-2">
                            Eligible for FREE standard shipping with subscription!
                            <a className="btn p-0 mb-1 text-primary bg-white">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    toggleDropdowns(field, event) {
        event.stopPropagation();
        if (this.state.dropdowns[field]) {
            this.setState({ dropdowns: {} });
        } else {
            this.setState({ dropdowns: { [field]: "show" } });
        }
    }
}

export default AirFilterList;