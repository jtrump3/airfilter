import React from "react";
import "./AirFilterPage.scss";
class AirFilterPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          dropdowns: {},
            frequency:"Every 6 Months",
            shortSide: "in.",
            longSide: "in.",
            thickness: "in.",
        };
      }
    componentDidMount() {
        window.onclick = (event) => {
            this.setState({
            dropdowns: {},
            });
        };
    }
    render() {
        return (
            <div className="row">
                <div className="dropdown w-100">
                    <div
                        onClick={this.toggleDropdowns.bind(this, "shortSide")}
                        className="btn w-100 input dropdown-btn font-weight-normal text-truncate text-left pt-2"
                    >
                        Short side ({this.state.shortSide})
                        <span className="dropdown-toggle text-primary float-right"/>
                    </div>
                    <div className={`dropdown-content w-100 border ${this.state.dropdowns.shortSide}`}>
                        <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "shortSide")}
                        >
                        1
                        </a>
                        <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "shortSide")}
                        >
                        2
                        </a>
                        <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "shortSide")}
                        >
                        3
                        </a>
                    </div>
                </div>
                <div className="dropdown w-100">
                    <div
                        onClick={this.toggleDropdowns.bind(this, "longSide")}
                        className="btn w-100 input dropdown-btn font-weight-normal text-truncate text-left pt-2"
                    >
                        Long side ({this.state.longSide})
                        <span className="dropdown-toggle text-primary float-right"/>
                    </div>
                    <div className={`dropdown-content w-100 border ${this.state.dropdowns.longSide}`}>
                        <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "longSide")}
                        >
                        1
                        </a>
                        <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "longSide")}
                        >
                        2
                        </a>
                        <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "longSide")}
                        >
                        3
                        </a>
                    </div>
                </div>
                <div className="dropdown w-100">
                    <div
                        onClick={this.toggleDropdowns.bind(this, "thickness")}
                        className="btn w-100 input dropdown-btn font-weight-normal text-truncate text-left pt-2"
                    >
                        Thickness ({this.state.thickness})
                        <span className="dropdown-toggle text-primary float-right"/>
                    </div>
                    <div className={`dropdown-content w-100 border ${this.state.dropdowns.thickness}`}>
                        <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "thickness")}
                        >
                        1
                        </a>
                        <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "thickness")}
                        >
                        2
                        </a>
                        <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "thickness")}
                        >
                        3
                        </a>
                    </div>
                </div>
            </div>
        );
    }
    toggleDropdowns(field, event) {
        event.stopPropagation();
        if (this.state.dropdowns[field]) {
            this.setState({dropdowns: {}});
        } else {
            this.setState({dropdowns: {[field]: "show"}});
        }
    }
    handleChange(field, event) {
        let value = event.target.value;
        if (!event.target.value) {
            value = event.target.innerText;
        }
        this.setState({ [field]: value });
    }
}

export default AirFilterPage;