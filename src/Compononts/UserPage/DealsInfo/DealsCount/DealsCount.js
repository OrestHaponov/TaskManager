import React from "react";
import AllDealsCount from "./AllDealsCount";
import ActiveDealsCount from "./ActiveDealsCount";
import CompletedDealsCount from "./CompletedDealsCount";


class DealsCount extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <AllDealsCount
                userDeals={this.props.userDeals}
                showAll={this.props.showAll}
                />
                <ActiveDealsCount
                userDeals={this.props.userDeals}
                showActive={this.props.showActive}                    
                />
                <CompletedDealsCount
                userDeals={this.props.userDeals}
                showCompleted={this.props.showCompleted}                    
                />
            </React.Fragment>
        );
    }
}

export default DealsCount;
