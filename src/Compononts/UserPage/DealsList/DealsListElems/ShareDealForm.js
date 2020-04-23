import React from "react";

class ShareDealForm extends React.Component {
    constructor(props){
        super(props);
    }

    render() {  
        return (
            <form action="" onSubmit={()=>this.props.shareDealText(this.props.users,this.props.userName,this.props.dealText,this.props.valueShare)}>
                <input
                    type="text"
                    value={this.props.valueShare}
                    onChange={this.props.hadleChangeShare}
                    placeholder="Type users name"
                /> 
                <input type="submit" value=""/>
            </form>
        );
    }
}

export default ShareDealForm;
