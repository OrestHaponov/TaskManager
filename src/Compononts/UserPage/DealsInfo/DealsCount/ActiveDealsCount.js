import React from "react";

class ActiveDealsCount extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                {this.props.showActive === true ? 
                    <React.Fragment>
                        {this.props.userDeals.map((value,index)=>{
                            return(
                                <span key={index}>
                                    {value.activeDeals.length}
                                    {value.activeDeals.length == 1 ? " item left" : " items left "}
                                </span>
                            )
                        })}
                    </React.Fragment>
                : null}
            </React.Fragment>
        );
    }
}

export default ActiveDealsCount;
