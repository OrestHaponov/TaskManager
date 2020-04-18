import React from "react";

class ClearAll extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
                <React.Fragment>
                    {/* {this.props.showAll === true ? */}
                    <span onClick={this.props.clearAll}>
                        Clear all
                    </span>
                    {/* : null} */}
                </React.Fragment>
        );
    }
}

export default ClearAll;
