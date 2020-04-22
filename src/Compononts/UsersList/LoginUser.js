import React from "react";
import {Link} from "react-router-dom";

class LoginUser extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>
              {this.props.users.map((value,index)=>{
                return(
                  <React.Fragment key={index}>
                    {this.props.loginUserName == value.name ?
                      <Link to={value.name}>
                        <h1 className="mylist">My list</h1>
                      </Link>
                    : null}
                  </React.Fragment>
                )
              })}
            </React.Fragment>
        );
    }
}



export default LoginUser;
