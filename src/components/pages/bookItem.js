"use strict"
import React, {Component, PropTypes} from 'react';
import {Col, Button} from 'react-bootstrap';

/**
 * @class BookItem
 * @copyright 2016 Marian Adamache
*/
export default class BookItem extends React.Component {

    static displayName = "BookItem";

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
						<Button bsStyle="primary" >Add to cart <i className="fa fa-cart-plus"></i></Button>
					</div>
				</div>
			</Col>
        )
    }

}
