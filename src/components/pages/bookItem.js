"use strict"
import React, {Component, PropTypes} from 'react';
import {Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, updateCart} from '../../actions/cartActions';

/**
 * @class BookItem
 * @copyright 2016 Marian Adamache
*/
class BookItem extends React.Component {

    static displayName = "BookItem";
    handleCart(){
        const book = [...this.props.cart , {
            _id : this.props._id,
            title : this.props.title,
            description : this.props.description,
            author : this.props.author,
            price: this.props.price,
            quantity:1

        }]
        // is cart empty
        if (this.props.cart.length > 0 ) {
            let _id = this.props._id;
            let cartIndex = this.props.cart.findIndex((cart) => {return cart._id === _id})
            if(cartIndex === -1){
                this.props.addToCart(book)
            }else{
                this.props.updateCart(_id, 1)
            }
        }else{
            this.props.addToCart(book)
        }
    }

    render() {
		let price = Number(this.props.price).toFixed(2);
        return (
			<Col xs={12} sm={6} md={3} >

				<div className="card">
					<img className="card-img-top" src={this.props.image} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{this.props.title}</h5>
						<hr/>
						<h6 className="card-subtitle mb-2">Author: <span className="text-info">{this.props.author}</span></h6>
						<h6 className="card-subtitle mb-2">Price: <span className="text-info">{price} $</span></h6>
						<h6 className="card-text">Description: {this.props.description}</h6>

					</div>
					<div className="card-footer">
						<Button onClick={this.handleCart.bind(this)} bsStyle="primary" >Add to cart <i className="fa fa-cart-plus"></i></Button>
					</div>
				</div>
			</Col>
        )
    }

}
function mapStateToProps(state){
    return{
        cart:state.cart.cart
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addToCart: addToCart,
        updateCart: updateCart
    }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BookItem)
