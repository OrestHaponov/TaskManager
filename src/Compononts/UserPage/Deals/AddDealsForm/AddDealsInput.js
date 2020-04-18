import React from "react";

class AddDealsInput extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <input type="text" value={this.props.valueTask} onChange={this.props.handleChangeTask} className="addDeals__input"/>
        );
    }
}

export default AddDealsInput;
