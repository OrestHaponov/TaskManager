import React from "react";

class DealText extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.share === false ?
                    <p className={this.props.isDone === true ? "done" : null}>{this.props.text}</p>
                : null}
            </React.Fragment>
        );
    }
}

export default DealText;
