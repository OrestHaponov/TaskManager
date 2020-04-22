import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {handleChangeName,handleChangePass,handleChangeEmail,handleSubmitUser} from "../../Store/Action/Registration";

class Registration extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="registration">
                <div className="wrapper">
                    <form onSubmit={()=>this.props.handleSubmitUser(this.props.valueName,this.props.valueEmail,this.props.valuePass,this.props.users)} className="registration__form">
                        <input type="text" onChange={this.props.handleChangeName} value={this.props.valueName} placeholder="Name"/>
                        <input type="text" onChange={this.props.handleChangeEmail} value={this.props.valueEmail} placeholder="Email"/>
                        <input type="text" onChange={this.props.handleChangePass} value={this.props.valuePass} placeholder="Password"/>
                        <input type="submit" value="Register" className="registration__form-button"/>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        valueName: state.Registration.valueName,
        valueEmail: state.Registration.valueEmail,
        valuePass: state.Registration.valuePass,
        users: state.Registration.users,
        register: state.Registration.register,
    }
}

function mapDispatchToProps(dispatch){
    return{
        handleChangeName: (valueName)=>dispatch(handleChangeName(valueName)),
        handleChangeEmail: (valueEmail)=>dispatch(handleChangeEmail(valueEmail)),
        handleChangePass: (valuePass)=>dispatch(handleChangePass(valuePass)),
        handleSubmitUser: (valueName,valueEmail,valuePass,users)=>dispatch(handleSubmitUser(valueName,valueEmail,valuePass,users)),
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Registration);
