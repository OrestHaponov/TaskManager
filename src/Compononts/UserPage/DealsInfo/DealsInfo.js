import React from "react";
import "./DealsInfo.scss";
import AllDealsCount from "./DealsCount/AllDealsCount";
import DealsStates from "./DealsStates/DealsStates";
import ClearAll from "./DealsClear/ClearAll";

class DealsInfo extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
                <div className="userPage__deals-info">
                    <AllDealsCount userDeals={this.props.userDeals}/>
                    {/* <AllDealsCount 
                        deals={this.props.deals}
                        showAll={this.props.showAll}
                    />
                    <ActiveDealsCount 
                        showActive={this.props.showActive} 
                        dealsListActive={this.props.dealsListActive}
                    />
                    <CompletedDealsCount 
                        showCompleted={this.props.showCompleted} 
                        dealsListCompleted={this.props.dealsListCompleted}
                    /> */}
                    <DealsStates 

                    />
                    <div className="userPage__deals-info-clear">
                        <ClearAll 
                        
                        />
                    </div>
                    {/* <div className="bg_one"></div>
                    <div className="bg_two"></div> */}
                </div>
        );
    }
}

export default DealsInfo;
