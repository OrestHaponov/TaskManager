import React from "react";
import "./AddDeals.scss";
import {connect} from "react-redux";
import {handleChangeTask,addTask} from "../../../Store/Action/AddDeals";
import {doneDeal,deleteDeal,showAllDeals,showActiveDeals,showCompletedDeals,clearAll,clearCompleted,clearAllDeals,clearCompletedDeals,returnToAll} from "../../../Store/Action/Deals";
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
                    <DealsList 
                        userDeals={this.props.userDeals}
                        userName={this.props.userName}
                        users={this.props.users}
                        doneDeal={this.props.doneDeal}
                        deleteDeal={this.props.deleteDeal}
                        showAll={this.props.showAll}
                        showActive={this.props.showActive}
                        showCompleted={this.props.showCompleted}
                        returnToAll={this.props.returnToAll}
                        />
                    <DealsInfo 
                        users={this.props.users}
                        userName={this.props.userName}
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
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(AddDeals);
