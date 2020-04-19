import React from "react";
import DealText from "../DealsListElems/DealText";

class DealsCompletedList extends React.Component {
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
                            {value.doneDeals.map((value,index)=>{
                                return(
                                    <li key={index}>
                                        <div className="userPage__deals-list-input">
                                            <input
                                                type="checkbox"
                                                checked={value.isDone}
                                                onChange={()=>this.props.returnToAll(doneDealsList,value.id,this.props.users,this.props.userName)} 
                                            /> 
                                        </div>
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

export default DealsCompletedList;
