import React from "react";
import "./Join.scss";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import Login from "./Login";

class Join extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="join">
                <div className="wrapper">
                    <Link to="/login">Login</Link>
                    <Link to="/registration">Registration</Link>
                </div>
            </div>
        );
    }
}



export default connect ()(Join);
