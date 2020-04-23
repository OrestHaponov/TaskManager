import React from "react";

class ClearCompleted extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
                <React.Fragment>
                    {this.props.showCompleted === true ? 
                    <span onClick={()=>this.props.clearCompletedDeals(this.props.users,this.props.userName)} className="userPage__deals-info-clear">
                        Clear completed
                    </span>
                    : null}
                </React.Fragment>
        );
    }
}

export default ClearCompleted;
