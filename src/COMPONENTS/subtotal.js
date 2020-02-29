import React, { Component } from 'react';

import "../App.css"
class Subtotal extends Component {
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
                                <div className="col-sm-6">Subtotal</div>
                                <div className="col-sm-6">{this.props.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Subtotal;