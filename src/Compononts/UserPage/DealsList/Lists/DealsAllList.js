import React from "react";
import DealDoneInput from "../DealsListElems/DealDoneInput";
import DealText from "../DealsListElems/DealText";
import DealDelete from "../DealsListElems/DealDelete";
import EditDealForm from "../DealsListElems/EditDealForm";
import DealEdit from "../DealsListElems/DealEdit";
import DealShare from "../DealsListElems/DealShare";
import ShareDealForm from "../DealsListElems/ShareDealForm";
import ShareBy from "../DealsListElems/ShareBy";

class DealsAllList extends React.Component {
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
                            {value.deals.map((value,index)=>{
                                return(
                                    <li key={index}>
                                        <div className="userPage__deals-list-deal">
                                        <DealDoneInput 
                                            users={this.props.users}
                                            isDone={value.isDone}
                                            dealId={value.id}
                                            userName={this.props.userName}
                                            loginUserName={this.props.loginUserName}
                                            doneDeal={this.props.doneDeal}
                                            doneDealsList={doneDealsList}
                                        />
                                        {value.edit === false ?
                                            <React.Fragment>
                                                <DealText 
                                                    text={value.text}
                                                    isDone={value.isDone}
                                                    share={value.share}
                                                    userName={this.props.userName}
                                                    loginUserName={this.props.loginUserName}
                                                />
                                                <DealEdit 
                                                    users={this.props.users}
                                                    userName={this.props.userName}
                                                    dealId={value.id}
                                                    dealText={value.text}
                                                    loginUserName={this.props.loginUserName}
                                                    showEdit={this.props.showEdit}
                                                />
                                            </React.Fragment>
                                        :
                                            <EditDealForm
                                                users={this.props.users}
                                                userName={this.props.userName}
                                                dealId={value.id}
                                                valueEdit={this.props.valueEdit}
                                                hadleChangeEdit={this.props.hadleChangeEdit}
                                                editDealText={this.props.editDealText}
                                            />
                                        }
                                        {value.share === false ?
                                            <DealShare 
                                                users={this.props.users}
                                                userName={this.props.userName}
                                                dealId={value.id}                           
                                                loginUserName={this.props.loginUserName}                           
                                                shareDeal={this.props.shareDeal}
                                            />
                                        : 
                                            <ShareDealForm
                                                users={this.props.users}
                                                userName={this.props.userName}
                                                dealId={value.id}
                                                dealText={value.text}
                                                valueShare={this.props.valueShare}
                                                hadleChangeShare={this.props.hadleChangeShare}
                                                shareDealText={this.props.shareDealText}
                                            />
                                        }
                                        <DealDelete 
                                            users={this.props.users}
                                            dealId={value.id}
                                            userName={this.props.userName}
                                            loginUserName={this.props.loginUserName}
                                            deleteDeal={this.props.deleteDeal}
                                        />
                                        </div>
                                        <ShareBy 
                                            shareBy={value.shareBy}
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

export default DealsAllList;
