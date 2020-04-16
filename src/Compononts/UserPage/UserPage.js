import React from "react";
import {connect} from "react-redux";

class UserPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="UserPage">
                <h1>UserPage</h1>
            </div>
        );
    }
}



export default connect ()(UserPage);
