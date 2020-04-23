import React from "react";
import "./AddDeals.scss";
import {connect} from "react-redux";
import {handleChangeTask,addTask} from "../../../Store/Action/AddDeals";
import {doneDeal,deleteDeal,showAllDeals,showActiveDeals,showCompletedDeals,clearAll,clearCompleted,clearAllDeals,clearCompletedDeals,returnToAll,showEdit,editDealText,hadleChangeEdit,hadleChangeShare,shareDeal,shareDealText} from "../../../Store/Action/Deals";
import AddDealsForm from "./AddDealsForm/AddDealsForm";
import DealsList from "../DealsList/DealsList";
import DealsInfo from "../DealsInfo/DealsInfo";


class AddDeals extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="addDeals">
                <div className="wrapper">
                    {this.props.userName == this.props.loginUserName ?
                        <AddDealsForm 
                            users={this.props.users}
                            userName={this.props.userName}
                            valueTask={this.props.valueTask}
                            userDeals={this.props.userDeals}
                            handleChangeTask={this.props.handleChangeTask}
                            addTask={this.props.addTask}
                            doneDeal={this.props.doneDeal}
                            deleteDeal={this.props.deleteDeal}
                        />
                    : null} 
                    <DealsList 
                        userDeals={this.props.userDeals}
                        userName={this.props.userName}
                        users={this.props.users}
                        loginUserName={this.props.loginUserName}
                        valueEdit={this.props.valueEdit}
                        valueShare={this.props.valueShare}
                        doneDeal={this.props.doneDeal}
                        deleteDeal={this.props.deleteDeal}
                        showAll={this.props.showAll}
                        showActive={this.props.showActive}
                        showCompleted={this.props.showCompleted}
                        returnToAll={this.props.returnToAll}
                        showEdit={this.props.showEdit}
                        hadleChangeEdit={this.props.hadleChangeEdit}
                        editDealText={this.props.editDealText}
                        hadleChangeShare={this.props.hadleChangeShare}
                        shareDeal={this.props.shareDeal}
                        shareDealText={this.props.shareDealText}
                    />
                    <DealsInfo 
                        users={this.props.users}
                        userName={this.props.userName}
                        loginUserName={this.props.loginUserName}
                        userDeals={this.props.userDeals}
                        showAllDeals={this.props.showAllDeals}
                        showAll={this.props.showAll}
                        showActive={this.props.showActive}
                        showCompleted={this.props.showCompleted}
                        showAllDeals={this.props.showAllDeals}
                        showActiveDeals={this.props.showActiveDeals}
                        showCompletedDeals={this.props.showCompletedDeals}
                        clearAllDeals={this.props.clearAllDeals}
                        clearCompletedDeals={this.props.clearCompletedDeals}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        valueTask: state.AddDeals.valueTask,
        users: state.Registration.users,
        showAll: state.Deals.showAll,
        showActive: state.Deals.showActive,
        showCompleted: state.Deals.showCompleted,
        valueEdit: state.Deals.valueEdit,
        loginUserName: state.Login.loginUserName,
        valueShare: state.Deals.valueShare,
    }
}

function mapDispatchToProps(dispatch){
    return{
        handleChangeTask: (valueTask)=>dispatch(handleChangeTask(valueTask)),
        addTask: (task,users,userName)=>dispatch(addTask(task,users,userName)),
        doneDeal: (users,dealId,userName,doneDealsList)=>dispatch(doneDeal(users,dealId,userName,doneDealsList)),
        deleteDeal: (users,dealId,userName)=>dispatch(deleteDeal(users,dealId,userName)),
        showAllDeals: ()=>dispatch(showAllDeals()),
        showActiveDeals: ()=>dispatch(showActiveDeals()),
        showCompletedDeals: ()=>dispatch(showCompletedDeals()),
        clearAll: ()=>dispatch(clearAll()),
        clearCompleted: ()=>dispatch(clearCompleted()),
        clearAllDeals: (users,userName)=>dispatch(clearAllDeals(users,userName)),
        clearCompletedDeals: (users,userName)=>dispatch(clearCompletedDeals(users,userName)),
        returnToAll: (dealsListCompleted,dealId,users,userName)=>dispatch(returnToAll(dealsListCompleted,dealId,users,userName)),
        showEdit: (users,userName,dealId,dealText)=>dispatch(showEdit(users,userName,dealId,dealText)),
        hadleChangeEdit: (valueEdit)=>dispatch(hadleChangeEdit(valueEdit)),
        editDealText: (users,userName,dealId,valueEdit)=>dispatch(editDealText(users,userName,dealId,valueEdit)),
        hadleChangeShare: (valueShare)=>dispatch(hadleChangeShare(valueShare)),
        shareDeal: (users,userName,dealId)=>dispatch(shareDeal(users,userName,dealId)),
        shareDealText: (users,userName,dealText,valueShare)=>dispatch(shareDealText(users,userName,dealText,valueShare)),
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(AddDeals);
