import React from "react";


class Users extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ul>
                {this.props.users.map((value,index)=>{
                    return(
                    <li key={index}>{value.name}</li>
                    )
                })}
            </ul>
        );
    }
}



export default Users;
