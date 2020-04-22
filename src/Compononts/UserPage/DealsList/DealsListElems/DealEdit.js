import React from "react";
import edit from "./edit.png";

class DealEdit extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.userName == this.props.loginUserName ?
                    <div className="userPage__deals-list-edit" onClick={()=>this.props.showEdit(this.props.users,this.props.userName,this.props.dealId,this.props.dealText)}>
                        <img src={edit} alt="" />
                    </div>
                : null}
            </React.Fragment>
        );
    }
}

export default DealEdit;
