import React from "react";

class AddDealsButton extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <input type="submit" value="Add" className="addDeals__button"/>
        );
    }
}

export default AddDealsButton;
