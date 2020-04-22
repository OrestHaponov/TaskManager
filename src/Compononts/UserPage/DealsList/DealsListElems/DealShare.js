import React from "react";
import share from "./share.png";

class DealShare extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.userName == this.props.loginUserName ?
                    <div className="userPage__deals-list-share" onClick={()=>this.props.shareDeal(this.props.users,this.props.userName,this.props.dealId)}>
                        <img src={share} alt="" />
                    </div>
                : null}
            </React.Fragment>
        );
    }
}

export default DealShare;
