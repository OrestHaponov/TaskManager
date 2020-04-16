import React from "react";
import "./UserList.scss";
import {connect} from "react-redux";
import {toggleUserList} from "../../Store/Action/UserList";
import UserTitle from "./UserTitle";
import Users from "./Users";
import arrow from "./arrow.png";
class UserList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={this.props.open === true ? "userlist open" : "userlist close"}>
                <div onClick={this.props.toggleUserList} className={this.props.open === true ? "toggle__arrow__close" : "toggle__arrow__open"}>
                    <img src={arrow} alt=""/>
                </div>
                <UserTitle />
                <Users users={this.props.users}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        open: state.UserList.open,
        users: state.Registration.users,
    }
}

function mapDispatchToProps(dispatch){
    return{
        toggleUserList: ()=>dispatch(toggleUserList()),
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(UserList);
