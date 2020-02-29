import React, { Component } from 'react';

import "../App.css"
class EstimatedToal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="main-box ">
                    <div className="text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6"><h6> EstimatedToal </h6></div>
                                <div className="col-sm-6">{this.props.EstimatedToal}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default EstimatedToal;