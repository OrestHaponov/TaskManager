import React from "react";

class ShareBy extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.shareBy == "" ? null :
                    <div className="userPage__deals-list-shareBy">
                        {this.props.shareBy == "" ? null :
                            <span>Shared by {this.props.shareBy}</span>
                        }
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default ShareBy;
