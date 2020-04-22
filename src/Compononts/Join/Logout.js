import React from "react";
import {connect} from "react-redux";
import {out} from "../../Store/Action/Logout";

class Logout extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="logout">
                <button onClick={this.props.out}>Logout</button>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        users: state.Registration.users,
    }
}

function mapDispatchToProps(dispatch){
    return{
        out: ()=>dispatch(out())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Logout);
