import React from "react";
import ClearAll from "./ClearAll";
import ClearCompleted from "./ClearCompleted";

class DealsClear extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <ClearAll
                    users={this.props.users}
                    userName={this.props.userName}
                    showAll={this.props.showAll}
                    clearAllDeals={this.props.clearAllDeals}
                />
                <ClearCompleted
                    users={this.props.users}
                    userName={this.props.userName}
                    showCompleted={this.props.showCompleted}
                    clearCompletedDeals={this.props.clearCompletedDeals}
                />
            </React.Fragment>
        );
    }
}

export default DealsClear;
