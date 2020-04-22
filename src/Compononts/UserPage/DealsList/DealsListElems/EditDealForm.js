import React from "react";

class EditDealForm extends React.Component {
    constructor(props){
        super(props);
    }

    render() {  
        return (
            <form action="" onSubmit={()=>this.props.editDealText(this.props.users,this.props.userName,this.props.dealId,this.props.valueEdit)}>
                <input
                    type="text"
                    value={this.props.valueEdit}
                    onChange={this.props.hadleChangeEdit}
                /> 
                <input type="submit" value=""/>
            </form>
        );
    }
}

export default EditDealForm;
