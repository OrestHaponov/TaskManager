import React from "react";
import {Link} from "react-router-dom";

class Users extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ul>
              {this.props.users.map((value,index)=>{
                return(
                  <React.Fragment key={index}>
                    {this.props.loginUserName !== value.name ?
                      <li className="users">
                        <Link to={value.name}>
                            {value.name}
                        </Link>
                      </li>
                    : null}
                  </React.Fragment>
                )
              })}
            </ul>
        );
    }
}



export default Users;
