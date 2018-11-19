import React from "react";
import "./AirFilterPage.scss";
import {
    AIR_FILTER_HEIGHTS,
    AIR_FILTER_THICKNESSES,
    AIR_FILTER_WIDTHS
} from "./MockData"
import InfoCircle from "./InfoCircle";
import AirFilterList from "./AirFilterList";

class AirFilterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdowns: {},
            shortSide: "in.",
            longSide: "in.",
            thickness: "in.",
            shortSideSelected: false,
            longSideSelected: false,
            thicknessSelected: false,
        };
    }
    startOver(){
        this.setState({
            shortSideSelected: false,
            longSideSelected: false,
            shortSide: "in.",
            longSide: "in.",
            thickness: "in.",
        });
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
                        className="font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "shortSide")}
                    >
                        {AIR_FILTER_WIDTHS[i]}"
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
                        className="font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "longSide")}
                    >
                        {AIR_FILTER_HEIGHTS[i]}"
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
                        className="font-weight-normal btn bg-white"
                        onClick={this.handleChange.bind(this, "thickness")}
                    >
                        {AIR_FILTER_THICKNESSES[i]}"
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
                    className="btn w-100 py-2 text-primary font-weight-bold bg-white border-primary"
                >
                    <span className="h3">Long side ({this.state.longSide})</span>
                    <span className="dropdown-toggle float-right" />
                </div>
            );
        }
        return (
            <div
                className="btn w-100 py-2 text-primary font-weight-bold bg-white border-primary"
            >
                <span className="h3">Long side ({this.state.longSide})</span>
                <span className="dropdown-toggle  float-right" />
            </div>
        );
    }

    returnThicknessButton(shortSide, longSide){
        if(shortSide && longSide) {
            return (
                 <div
                    onClick={this.toggleDropdowns.bind(this, "thickness")}
                    className="btn w-100 py-2 text-primary font-weight-bold bg-white border-primary"
                >
                    <span className="h3">Thickness ({this.state.thickness})</span>
                    <span className="dropdown-toggle float-right" />
                </div>
            );
        }
        return (
            <div
                className="btn w-100 py-2 text-primary font-weight-bold bg-white border-primary"
            >
                <span className="h3">Thickness ({this.state.thickness})</span>
                <span className="dropdown-toggle float-right" />
            </div>
        );
    }

    render() {
        return (
            <div>
                <h1 className="text-center my-5 py-3 display-3 font-weight-normal">
                    Find the right HVAC air filter <br/>for your furnace or air conditioner
                </h1>
                <div className="border mx-auto col-10 px-0">
                    <div className="jumbotron py-3">
                        <div className="h3 mt-2 text-center font-weight-normal">
                            Select all three dimensions to find the right filter. You can find them on your current filter.
                        </div>
                        <div className="row">
                            <div className="dropdown px-0 mx-5 col">
                                <div className="h4 text-center text-muted font-weight-normal">Step 1</div>
                                <div
                                    onClick={this.toggleDropdowns.bind(this, "shortSide")}
                                    className="btn w-100 py-2 text-primary font-weight-bold bg-white border-primary"
                                >
                                    <span className="h3">Short side ({this.state.shortSide})</span>
                                    <span className="dropdown-toggle  float-right" />
                                </div>
                                <div className={`dropdown-content w-100 border ${this.state.dropdowns.shortSide}`}>
                                    {this.returnShortSideTags()}
                                </div>
                            </div>
                            <div className="dropdown px-0 mx-5 col">
                                <div className="h4 text-center text-muted font-weight-normal">Step 2</div>
                                {this.returnLongSideButton(this.state.shortSideSelected)}
                                <div className={`dropdown-content w-100 border ${this.state.dropdowns.longSide}`}>
                                    {this.returnLongSideTags()}
                                </div>
                            </div>
                            <div className="dropdown px-0 mx-5 col">
                            <div className="h4 text-center text-muted font-weight-normal">Step 3</div>
                                {this.returnThicknessButton(this.state.longSideSelected, this.state.shortSideSelected)}
                                <div className={`dropdown-content w-100 border ${this.state.dropdowns.thickness}`}>
                                    {this.returnThicknessTags()}
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.returnList()}
                </div>
                <div className="font-weight-bold h3 d-flex justify-content-center">
                    Top air filter brands
                </div>
                <div className="d-flex justify-content-center my-4">
                    <img alt="Arm & Hammer logo" className="mx-2 brand-image__stupid" src="https://www.searspartsdirect.com/etc/designs/searspartsdirect/clientlib_base/img/brands/png/afBrand1.png"/>
                    <img alt="Febreze logo" className="mx-2 brand-image" src="https://www.searspartsdirect.com/etc/designs/searspartsdirect/clientlib_base/img/brands/png/afBrand3.png"/>
                    <img alt="Accumulair logo" className="mx-2 brand-image" src="https://www.searspartsdirect.com/etc/designs/searspartsdirect/clientlib_base/img/brands/png/afBrand4.png"/>
                </div>
                <h1 className="pl-5 ml-5 display-4 font-weight-normal">A clean air filter makes a difference</h1>
                <div className="row px-5"> 
                    <div className="col-6">
                        <div className="h3 text-muted px-5 font-weight-normal">
                            Dirty air filters leave particles like dust, mites, pollen, and pet dander in the air, which reduces air quality in your home.
                            Dirty air filters also make your HVAC system work harder to move air, which raises energy bills and shortens the system's life.
                            <div className="my-4"/>
                            Save energy and improve air quality with replacement furnace filters and air conditioner filters from Sears PartsDirect.
                            Sears PartsDirect has top air filters brands such as BMC, Air Flow, and DuPont, at great prices.
                            <div className="my-4"/>
                            Check your owner's manual or enter in you filter dimensions to find the right air filter for your furnace or AC unit.
                        </div>
                    </div>
                    <div className="col-6 px-5 mt-5">
                        <img alt="" className="w-100" src="https://2qaayg3yvidcn9imquz625sg-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/home-air-purifier.jpg"/>
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
        if(field === "shortSide" && this.state.shortSide !== value) {
            this.setState({
                [field]: value,
                shortSideSelected: true,
                longSideSelected: false,
                longSide: "in.",
                thicknessSelected: false,
                thickness: "in.",
            })
        }
        if(field === "longSide" && this.state.longSide !== value) {
            this.setState({
                [field]: value,
                shortSideSelected: true,
                longSideSelected: true,
                thicknessSelected: false,
                thickness: "in.",
            })
        }
        if(field === "thickness" && this.state.thickness !== value) {
            this.setState({
                [field]: value,
                shortSideSelected: true,
                longSideSelected: true,
                thicknessSelected: true,
            })
        }
    }
    
    returnBestFilters(){
        if (true) {
            return(
                <AirFilterList />
            )
        }
    }
    returnBetterFilters(){
        if (true) {
            return(
                <div>

                </div>
            )
        }
    }
    returnGoodFilters(){
        if (true) {
            return(
                <div>

                </div>
            )
        }
    }
    returnList() {
        if(true){
            return(
                <React.Fragment>
                    <div className="display-4 font-weight-normal d-flex justify-content-center">
                        We found 11 results for <span className="font-weight-bold ml-3">{this.state.shortSide} x {this.state.longSide} x {this.state.thickness}</span>
                    </div>
                    <div className="btn bg-light text-primary d-flex justify-content-center" onClick={this.startOver.bind(this)}>
                        <span className="h2 font-weight-normal mt-1">Start over</span>
                    </div>
                    <div>
                        {this.returnBestFilters()}
                    </div>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <div className="d-flex justify-content-center">
                    <img alt="Three air filters displaying length, height, and width" src="https://www.searspartsdirect.com/etc/designs/searspartsdirect/clientlib_base/img/airFilterDimension.png"/>
                </div>
                <div className="h4 font-weight-normal d-flex justify-content-center py-4 row">
                    <div className="mt-1 mr-2">
                        <InfoCircle width="25px" height="25px" fill="blue"/>
                    </div>
                    Your air filter's actual dimensions might differ slightly from those printed on the filter. 
                    <br/>
                    Order the size that's printed on the filter.
                </div>
            </React.Fragment>
        )
    }
}

export default AirFilterPage;