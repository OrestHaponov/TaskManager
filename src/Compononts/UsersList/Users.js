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
                  <Link to={value.name}
                  key={index}>
                    <div className="users">
                      <h3>{value.name}</h3>
                    </div>
                  </Link>
                )
              })}
            </ul>
        );
    }
}



export default Users;
