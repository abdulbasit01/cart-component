import React, { Component } from 'react';
import chair from "../chair.jpg"
import "../App.css"
class Discount extends Component {
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
                                    className="btn btn-primary"
                                    onClick={this.itemHandeller}
                                    >
                                        <div className="PromoCode">
                                            <div className="promo1">
                                                {this.state.open === false ?"Apply" : "Hide " } Promot Code 
                                                {this.state.open === false ? " +" : " -" } 
                                            </div>
                                            
                                        </div>
                                        
                                    
                                       
                                        
                                    </button>
                                   
                                    {this.state.open && 
                                        <div className="back">
                                            <form>
                                                <input type="text" placeholder="PROMOCODE" name="promocode" className="promocode-text" value={this.props.promocode}
                                                    onChange={this.props.hndlepromo}
                                                /><br/>
                                                <button className="btn btn-success btn-sm promocode-button" 
                                                disabled={this.props.isDisable}
                                                onClick={this.props.Discount}
                                                >Apply Promocode </button>
                                                
                                            </form>
                                        </div>
                                        
                                    }                                   
                                </div>
                                <br/>
                                
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Discount;