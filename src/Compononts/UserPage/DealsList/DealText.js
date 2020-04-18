import React from "react";

class DealText extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <p className={this.props.isDone === true ? "done" : null}>{this.props.text}</p>
        );
    }
}

export default DealText;
