import React from "react";
import AddDealsInput from "./AddDealsInput";
import AddDealsButton from "./AddDealsButton";

class AddDealsForm extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
                <form action="" onSubmit={()=>this.props.addTask(this.props.valueTask,this.props.users,this.props.userName)}>
                    <AddDealsInput 
                        valueTask={this.props.valueTask}
                        handleChangeTask={this.props.handleChangeTask}
                    />
                    <AddDealsButton />
                </form>
        );
    }
}



export default AddDealsForm;
