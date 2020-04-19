import React from "react";
import "./DealsInfo.scss";
import DealsStates from "./DealsStates/DealsStates";
import DealsCount from "./DealsCount/DealsCount";
import DealsClear from "./DealsClear/DealsClear";

class DealsInfo extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
                <div className="userPage__deals-info">
                    <DealsCount 
                        userDeals={this.props.userDeals}
                        showAll={this.props.showAll}
                        showActive={this.props.showActive}                    
                        showCompleted={this.props.showCompleted}
                    />
                    <DealsStates 
                        showAll={this.props.showAll}
                        showActive={this.props.showActive}
                        showCompleted={this.props.showCompleted}
                        showAllDeals={this.props.showAllDeals}
                        showActiveDeals={this.props.showActiveDeals}
                        showCompletedDeals={this.props.showCompletedDeals}
                    />
                    <DealsClear 
                        users={this.props.users}
                        userName={this.props.userName}
                        showAll={this.props.showAll}
                        clearAllDeals={this.props.clearAllDeals}
                        showCompleted={this.props.showCompleted}
                        clearCompletedDeals={this.props.clearCompletedDeals}
                    />
                    {/* <div className="bg_one"></div>
                    <div className="bg_two"></div> */}
                </div>
        );
    }
}

export default DealsInfo;
