import React from "react";

class AirFilterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdowns: {},
            numOfPages: 1,
            currentPage: 0,
            filters:[    {
                title: "",
                _4pack: 0,
                _12pack: 0,
            }],
        };
    }
    componentDidMount(){
        if(this.props.filters){
            this.setState({
                numOfPages: Math.ceil(this.props.filters.length/4),
                filters: this.props.filters,
            })
        }        
        
    }
    render(){
        return(
            <React.Fragment>
                <div className="row mx-1">
                    {this.returnList()}
                </div>
                <div className="text-center">
                    {this.returnPageSelector()}
                </div>
            </React.Fragment>
        );
    }
    returnList(){
        let filtersList = [];
        for(let i = this.state.currentPage * 4; i < 4*(this.state.currentPage+1); i++){
            if(this.state.filters[i]){
                filtersList.push(
                    <React.Fragment key={i}>
                        {this.returnPart(this.state.filters[i])}
                    </React.Fragment>
                )
            }
        }
        return filtersList
    }
    returnPart(filter){
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
                            <span className="h3 font-weight-bold">{filter.title}</span>
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
                                        <span className="ml-2 font-weight-bold h2">${filter._4pack}</span>
                                        <span className="h4 font-weight-normal ml-2">(4-pack)</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="price-radios">
                                        <input type="radio" name="radios"/>
                                        <span className="price-radios__checked mt-4 py-4">&#9673;</span>
                                        <span className="price-radios__not-checked mt-4 py-4">&#9711;</span>
                                        <span className="ml-2 font-weight-bold h2">${filter._12pack}</span>
                                        <span className="h4 font-weight-normal ml-2">(12-pack)</span>                                    </label>
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
    returnPageSelector(){
        if(this.state.numOfPages > 1){
            let pageNumbers = [];
            for(let i = 1; i <= this.state.numOfPages; i++){
                if(i === this.state.currentPage+1){
                    pageNumbers.push(
                        <span className="mx-2 h2" key={i}>
                            {i}
                        </span>
                    )
                } else {
                    pageNumbers.push(
                        <span className="mx-2 h2 text-primary" key={i} onClick={this.setCurrentPage.bind(this)}>
                            {i}
                        </span>
                    )
                }
            }
            return(
                <React.Fragment>
                    <span className="btn">
                        <span className="page-selector__arrow">
                            &#x2039;
                        </span>
                    </span>
                    {pageNumbers}
                    <span className="btn">
                        <span className="page-selector__arrow">
                            &#x203A;
                        </span>
                    </span>
                </React.Fragment>
            )
        }
    }
    setCurrentPage(event){
        this.setState({currentPage: Number(event.target.innerText-1)})
    }
}

export default AirFilterList;