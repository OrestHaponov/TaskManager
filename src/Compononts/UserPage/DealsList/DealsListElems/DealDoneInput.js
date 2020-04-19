import React from "react";

class DealDoneInput extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="userPage__deals-list-input">
                <input
                    type="checkbox"
                    checked={this.props.isDone}
                    onChange={()=>this.props.doneDeal(this.props.users,this.props.dealId,this.props.userName,this.props.doneDealsList)} 
                /> 
            </div>
        );
    }
}

export default DealDoneInput;
