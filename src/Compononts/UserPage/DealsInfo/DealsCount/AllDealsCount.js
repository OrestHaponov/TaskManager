import React from "react";

class AllDealsCount extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                {this.props.showAll === true ? 
                    <React.Fragment>
                        {this.props.userDeals.map((value,index)=>{
                            return(
                                <span key={index}>
                                    You have&ensp; 
                                    {value.deals.length}  
                                    {value.deals.length == 1 ? " deal " : " deals "}
                                </span>
                            )
                        })}
                    </React.Fragment>
                : null}
            </React.Fragment>
        );
    }
}

export default AllDealsCount;
