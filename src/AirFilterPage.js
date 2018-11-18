import React from "react";
import "./AirFilterPage.scss";
import {
    AIR_FILTER_HEIGHTS,
    AIR_FILTER_THICKNESSES,
    AIR_FILTER_WIDTHS
} from "./MockData"
class AirFilterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdowns: {},
            frequency: "Every 6 Months",
            shortSide: null,
            longSide: null,
            thickness: null,
            shortSideSelected: false,
            longSideSelected: false,
        };
    }
    componentDidMount() {
        window.onclick = (event) => {
            this.setState({
                dropdowns: {},
            });
        };
    }

    returnShortSideTags() {
        const jsxTags = [];
        for (let i = 0; i < AIR_FILTER_WIDTHS.length; i++) {
            jsxTags.push(
                <React.Fragment key={i}>
                    <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "shortSide")}
                    >
                        {AIR_FILTER_WIDTHS[i]}
                    </a>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                {jsxTags}
            </React.Fragment>
        );
    }

    returnLongSideTags() {
        const jsxTags = [];
        for (let i = 0; i < AIR_FILTER_HEIGHTS.length; i++) {
            jsxTags.push(
                <React.Fragment key={i}>
                    <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "longSide")}
                    >
                        {AIR_FILTER_HEIGHTS[i]}
                    </a>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                {jsxTags}
            </React.Fragment>
        );
    }

    returnThicknessTags() {
        const jsxTags = [];
        for (let i = 0; i < AIR_FILTER_THICKNESSES.length; i++) {
            jsxTags.push(
                <React.Fragment key={i}>
                    <a
                        className="text-left text-trucate font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "thickness")}
                    >
                        {AIR_FILTER_THICKNESSES[i]}
                    </a>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                {jsxTags}
            </React.Fragment>
        );
    }

    returnLongSideButton(shortSide) {
        if (shortSide) {
            return (
                <div
                    onClick={this.toggleDropdowns.bind(this, "longSide")}
                    className="btn w-100 input dropdown-btn font-weight-normal text-truncate text-left pt-2"
                >
                    Long side ({this.state.longSide})
                        <span className="dropdown-toggle text-primary float-right" />
                </div>
            );
        }
        return (
            <div
                className="btn w-100 input dropdown-btn font-weight-normal text-truncate text-left pt-2"
            >
                Long side ({this.state.longSide})
                        <span className="dropdown-toggle text-primary float-right" />
            </div>
        );
    }

    returnThicknessButton(shortSide, longSide){
        if(shortSide && longSide) {
            return (
                 <div
                        onClick={this.toggleDropdowns.bind(this, "thickness")}
                        className="btn w-100 input dropdown-btn font-weight-normal text-truncate text-left pt-2"
                    >
                        Thickness ({this.state.thickness})
                        <span className="dropdown-toggle text-primary float-right" />
                    </div>
            );
        }
        return (
             <div
                        className="btn w-100 input dropdown-btn font-weight-normal text-truncate text-left pt-2"
                    >
                        Thickness ({this.state.thickness})
                        <span className="dropdown-toggle text-primary float-right" />
                    </div>
        );
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
                        <span className="dropdown-toggle text-primary float-right" />
                    </div>
                    <div className={`dropdown-content w-100 border ${this.state.dropdowns.shortSide}`}>
                        {this.returnShortSideTags()}
                    </div>
                </div>
                <div className="dropdown w-100">
                {this.returnLongSideButton(this.state.shortSideSelected)}
                    <div className={`dropdown-content w-100 border ${this.state.dropdowns.longSide}`}>
                        {this.returnLongSideTags()}
                    </div>
                </div>
                <div className="dropdown w-100">
                {this.returnThicknessButton(this.state.longSideSelected, this.state.shortSideSelected)}
                    <div className={`dropdown-content w-100 border ${this.state.dropdowns.thickness}`}>
                        {this.returnThicknessTags()}
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
    handleChange(field, event) {
        let value = event.target.value;
        if (!event.target.value) {
            value = event.target.innerText;
        }
        this.setState({ [field]: value }, () => {
            this.setState({
                shortSideSelected: (this.state.shortSide !== null),
            }, () => {
                this.setState({
                    longSideSelected: (this.state.shortSideSelected && this.state.longSide !== null)
                })
            });
        });
    }
}

export default AirFilterPage;