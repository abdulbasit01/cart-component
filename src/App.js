import React, { Component } from 'react';
import Subtotal from "./COMPONENTS/subtotal"
import PreviousBill from "./COMPONENTS/previousBill" 
import Taxes from "./COMPONENTS/Taxes"
import EstimatedTotal from "./COMPONENTS/estimatedTotal"
import ItemDetails from "./COMPONENTS/itemDetails"
import Discount from "./COMPONENTS/Discount"
import "./App.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      price:100,
      previousBill:-3.45,
      Taxes:0,
      EstimatedToal:0,
      promocode:"",
      isDisable:""
      
     }
  }
  Discount=()=>{
    this.setState({
      isDisable:"disabled"
      
    })
    if (this.state.promocode==="Discount"){
      this.setState({
        price:this.state.price*0.9
      },
      function(){
        this.setState({
          EstimatedToal:this.state.price+(-this.state.previousBill)+this.state.Taxes
        })
      }
      )
    }
    else {
      this.setState({
        price:this.state.price
      },
      function(){
        this.setState({
          EstimatedToal:this.state.price+(-this.state.previousBill)+this.state.Taxes
        })
      }
      )
    }
    
  }
  hndlepromo=(e)=>{
    this.setState({
      promocode:e.target.value,
    
    })
  }

 
  render() { 
    return ( 
      <React.Fragment>
        <div className="main-box App">
          <div className="text-center">
             <Subtotal price={this.state.price.toFixed(3)}/> 
             <PreviousBill previousbill={this.state.previousBill}/>
             <Taxes Taxes={this.state.Taxes.toFixed(3)}/>
             <hr />
             <EstimatedTotal EstimatedToal={this.state.EstimatedToal.toFixed(3)}/>
             <ItemDetails price={this.state.price.toFixed(3)}/>
             <hr />
             <Discount promocode={this.state.promocode} hndlepromo={this.hndlepromo} isDisable={this.state.isDisable} Discount={this.Discount}/>
             <hr/>
          </div>
        </div>
      </React.Fragment>
     );
  }
}
 
export default App;
