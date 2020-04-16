import React from "react";
import "./Join.scss";
import {connect} from "react-redux";
import {handleChangeEmailLogin,handleChangePassLogin,login} from "../../Store/Action/Login";

class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={()=>this.props.login(this.props.valueEmailLogin,this.props.valuePassLogin,this.props.users)} className="login__form">
                    <input type="text" onChange={this.props.handleChangeEmailLogin} value={this.props.valueEmailLogin} placeholder="Email"/>
                    <input type="text" onChange={this.props.handleChangePassLogin} value={this.props.valuePassLogin} placeholder="Password"/>
                    <input type="submit" value="Login" className="login__form-button"/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        valueEmailLogin: state.Login.valueEmailLogin,
        valuePassLogin: state.Login.valuePassLogin,
        users: state.Registration.users,
    }
}

function mapDispatchToProps(dispatch){
    return{
        handleChangeEmailLogin: (valueEmailLogin)=>dispatch(handleChangeEmailLogin(valueEmailLogin)),
        handleChangePassLogin: (valuePassLogin)=>dispatch(handleChangePassLogin(valuePassLogin)),
        login: (valueEmailLogin,valuePassLogin,users)=>dispatch(login(valueEmailLogin,valuePassLogin,users))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Login);
