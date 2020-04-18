import React from "react";
import {connect} from "react-redux";
import AddDeals from "./Deals/AddDeals";

class UserPage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const userDeals = this.props.users.filter(deleteElement=>deleteElement.name == this.props.userName);
        return (
            <div className="userPage">
                <AddDeals 
                    users={this.props.users}
                    userName={this.props.userName}
                    userDeals={userDeals}
                />
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        users: state.Registration.users,
    }
}

export default connect (mapStateToProps)(UserPage);
