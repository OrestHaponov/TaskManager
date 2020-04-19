import React from "react";
import deleteDeals from "./delete.png";

class DealDelete extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="userPage__deals-list-delete" onClick={()=>this.props.deleteDeal(this.props.users,this.props.dealId,this.props.userName)}>
                <img src={deleteDeals} alt="" />
            </div>
        );
    }
}

export default DealDelete;
