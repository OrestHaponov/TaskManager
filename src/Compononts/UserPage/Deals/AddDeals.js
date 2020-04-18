import React from "react";
import "./AddDeals.scss";
import {connect} from "react-redux";
import {handleChangeTask,addTask} from "../../../Store/Action/AddDeals";
import {doneDeal,deleteDeal} from "../../../Store/Action/Deals";
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
                        />
                    <DealsInfo 
                        userDeals={this.props.userDeals}
                    
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
    }
}

function mapDispatchToProps(dispatch){
    return{
        handleChangeTask: (valueTask)=>dispatch(handleChangeTask(valueTask)),
        addTask: (task,users,userName)=>dispatch(addTask(task,users,userName)),
        doneDeal: (users,dealId,userName)=>dispatch(doneDeal(users,dealId,userName)),
        deleteDeal: (users,dealId,userName)=>dispatch(deleteDeal(users,dealId,userName)),
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(AddDeals);
