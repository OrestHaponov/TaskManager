import React from "react";
import "./DealsList.scss";
import DealsAllList from "./Lists/DealsAllList";
import DealsActiveList from "./Lists/DealsActiveList";
import DealsCompletedList from "./Lists/DealsCompletedList";


class ListDeals extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="list__deals">
                {this.props.showAll === true ? 
                    <DealsAllList 
                        userDeals={this.props.userDeals}
                        userName={this.props.userName}
                        users={this.props.users}
                        loginUserName={this.props.loginUserName}
                        valueEdit={this.props.valueEdit}
                        valueShare={this.props.valueShare}
                        doneDeal={this.props.doneDeal}
                        deleteDeal={this.props.deleteDeal}
                        showEdit={this.props.showEdit}
                        hadleChangeEdit={this.props.hadleChangeEdit}
                        editDealText={this.props.editDealText}
                        hadleChangeShare={this.props.hadleChangeShare}
                        shareDeal={this.props.shareDeal}
                        shareDealText ={this.props.shareDealText }
                    />
                : null}
                {this.props.showActive === true ? 
                    <DealsActiveList 
                        userDeals={this.props.userDeals}
                        userName={this.props.userName}
                        users={this.props.users}
                        loginUserName={this.props.loginUserName}
                        doneDeal={this.props.doneDeal}
                    />
                : null}
                {this.props.showCompleted === true ?
                    <DealsCompletedList
                        userDeals={this.props.userDeals}
                        userName={this.props.userName}
                        users={this.props.users}
                        loginUserName={this.props.loginUserName}
                        doneDeal={this.props.doneDeal}
                        deleteDeal={this.props.deleteDeal}
                        returnToAll={this.props.returnToAll}
                    />
                : null}
            </div>
        );
    }
}

export default ListDeals;
