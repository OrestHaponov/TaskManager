import React from "react";
import DealDoneInput from "../DealsListElems/DealDoneInput";
import DealText from "../DealsListElems/DealText";

class DealsActiveList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul className="userPage__deals-list">
                {this.props.userDeals.map((value,index)=>{
                    const doneDealsList = value.doneDeals;
                    return(
                        <React.Fragment key={index}>
                            {value.activeDeals.map((value,index)=>{
                                return(
                                    <li key={index}>
                                        <DealDoneInput 
                                            users={this.props.users}
                                            isDone={value.isDone}
                                            dealId={value.id}
                                            userName={this.props.userName}
                                            doneDeal={this.props.doneDeal}
                                            doneDealsList={doneDealsList}
                                            />
                                        <DealText 
                                            text={value.text}
                                            isDone={value.isDone}
                                            />
                                    </li>
                                )
                            })}
                        </React.Fragment>
                    )
                })}
            </ul>
        );
    }
}

export default DealsActiveList;
