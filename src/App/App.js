   
import React from "react";
import "./app.scss";
import "../fonts/fonts.scss";
import Routes from "../Routes.js";
import Join from "../Compononts/Join/Join";
import UserList from "../Compononts/UsersList/UsersList";
import {connect} from "react-redux";
import Logout from "../Compononts/Join/Logout";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={this.props.login === true ? "app__login" : "app"}>
                {this.props.login === true ?
                    <React.Fragment>
                        <Logout />
                        <UserList loginUserName={this.props.loginUserName}/>
                    </React.Fragment>
                : 
                    <Join />
                }
                <Routes />
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        login: state.Login.login,
        loginUserName: state.Login.loginUserName,
    }
}

export default connect (mapStateToProps)(App);
