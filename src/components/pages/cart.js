"use strict"
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Panel, Col, Well, Row, Button} from 'react-bootstrap';

class Cart extends Component{
	render(){
		if (this.props.cart[0]) {
			return this.renderCart()
		}else{
			return this.rednderEmpty()
		}
	}
	rednderEmpty(){
		return(<div></div>)
	}
	renderCart(){

		return(
			<Panel header="Cart" bsStyle="prmary">
			</Panel>
		)
	}
}
function mapStateToProps(state){
	return{
		cart : state.cart.cart
	}
}
export default Cart;
