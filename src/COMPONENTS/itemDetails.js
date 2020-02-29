import React, { Component } from 'react';
import chair from "../chair.jpg"
import "../App.css"
class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
          }
    }
    itemHandeller=()=>{
        this.setState({
            open:!this.state.open
        })
    }
    render() { 
        
        return ( 
            <React.Fragment>
                <div className="main-box ">
                    <div className="text-center">
                        <div className="container ">
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <button
                                    href=""
                                    className="itemdetails btn btn-info"
                                    onClick={this.itemHandeller}
                                    >
                                        {this.state.open === false ?"See " : "Hide " } item details
                                        {this.state.open === false ? " +" : " -" } 
                                    </button>
                                    
                                        <br />
                                        <div className="customDiv">
                                            <div className={this.state.open===true? "visible " : "hidden "}>
                                                <img  src={chair} className="chair" width="120" height="150" alt="chair"/>
                                                
                                            </div>
                                            
                                            
                                        </div>  
                                   
                                </div>
                                {this.state.open && 
                                <div className="col-sm-6">
                                    <p className="detail">Qty-1 </p>
                                    <strong>{this.props.price} $</strong>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                }
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ItemDetails;