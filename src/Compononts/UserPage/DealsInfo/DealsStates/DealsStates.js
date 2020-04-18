import React from "react";

class DealsStates extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ul>
                <li className={this.props.showAll === true ? "active" : ""} onClick={()=>this.props.showAllDeals()}>All</li>
                <li className={this.props.showActive === true ? "active" : ""} onClick={()=>this.props.showActiveDeals()}>Active</li>
                <li className={this.props.showCompleted === true ? "active" : ""} onClick={()=>this.props.showCompletedDeals()}>Completed</li>
            </ul>
        );
    }
}

export default DealsStates;
