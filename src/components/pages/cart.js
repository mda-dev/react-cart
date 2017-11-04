"use strict"
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Panel, Col, Well, Row, Button, Table, FormGroup, InputGroup, FormControl} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {deleteCartItem, updateCart} from '../../actions/cartActions'

class Cart extends Component{
	onDelete(_id){
		const currentBookToDelete = this.props.cart;
		const indexToDelete = currentBookToDelete.findIndex((cart) => {
			return cart._id === _id
		})
		let cartAfterDelete = [
			...currentBookToDelete.slice(0,indexToDelete),
			...currentBookToDelete.slice(indexToDelete + 1)
		]

		this.props.deleteCartItem(cartAfterDelete);
	}
	onIncrement(_id){
		this.props.updateCart(_id, 1)
	}
	onDecrement(_id, quantity){
		if (quantity > 1) {
			this.props.updateCart(_id, -1)
		}
	}
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
		const cartItemsList = this.props.cart.map(function(cartArr, index){
			return(
				<tr key={cartArr._id}>
					<td>{index+1}</td>
					<td>{cartArr.title}</td>
					<td>{cartArr.author}</td>
					<td>{Number(cartArr.price).toFixed(2)} $</td>
					<td>
						<FormGroup>
							<InputGroup bsSize="small" style={{width:"100px"}}>
								<InputGroup.Button>
									<Button onClick={this.onDecrement.bind(this,cartArr._id, cartArr.quantity)} bsStyle="success"> - </Button>
								</InputGroup.Button>
								<FormControl type="text" placeholder={cartArr.quantity} style={{textAlign:"center"}}/>
								<InputGroup.Button>
									<Button onClick={this.onIncrement.bind(this,cartArr._id)} bsStyle="success"> + </Button>
								</InputGroup.Button>
							</InputGroup>
						</FormGroup>
					</td>
					<td><Button onClick={this.onDelete.bind(this, cartArr._id)}bsSize="small" bsStyle="danger"> <i className="fa fa-trash"></i></Button></td>
				</tr>
			)
		}, this)
		return(

				<div className="card" style={{margin: "20px 0"}}>
					<div className="card-header">
						<h4>Cart</h4>
					</div>
					<div className="card-body">
						<Table responsive>
							<thead>
							  <tr>
								<th>#</th>
								<th>Book Name</th>
								<th>Author</th>
								<th>Price</th>
								<th>Quantity</th>
								<th></th>
							  </tr>
							</thead>
							<tbody>
							  {cartItemsList}
							</tbody>
						  </Table>
					</div>
				</div>

		)
	}
}

function mapStateToProps(state){
	return{
		cart : state.cart.cart
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		deleteCartItem:deleteCartItem,
		updateCart:updateCart
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
