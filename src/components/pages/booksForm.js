"use strict"
import React, {Component, PropTypes} from 'react';
import {Col, Button, FormControl, FormGroup, ControlLabel, InputGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBooks} from '../../actions/booksActions';
/**
 * @class BooksList
 * @copyright 2016 Marian Adamache
*/
class BooksForm extends React.Component {

    static displayName = "BooksList";
	handleBookSubmit(){
		const book =[{
			title : findDOMNode(this.refs.title).value,
			author : findDOMNode(this.refs.author).value,
			price : findDOMNode(this.refs.price).value,
			description :findDOMNode(this.refs.description).value,
			image: "/book.ico"
		}]
		this.props.postBooks(book)
	}
    render() {
        return (
			<Col xs={12} sm={6} md={6} >
				<div className="card">
					<div className="card-body">
						<FormGroup controlId="title" bsSize="small">
							<ControlLabel>Title</ControlLabel>
							<FormControl type="text" placeholder="Book title" ref="title" />
						</FormGroup>
						<FormGroup controlId="author" bsSize="small">
							<ControlLabel>Author</ControlLabel>
							<FormControl type="text" placeholder="Book author" ref="author"/>
						</FormGroup>
						<FormGroup controlId="price" bsSize="small">
							<InputGroup>
								<InputGroup.Addon>Price</InputGroup.Addon>
								<FormControl type="text" placeholder="00.00" ref="price" />
								<InputGroup.Addon>$</InputGroup.Addon>
							</InputGroup>
						</FormGroup>
						<FormGroup controlId="description" bsSize="small">
							<ControlLabel>Description</ControlLabel>
							<FormControl type="textarea" placeholder="Add a book description" ref="description"/>
						</FormGroup>
					</div>
					<div className="card-footer">
						<Button onClick={this.handleBookSubmit.bind(this)} bsStyle="primary" >Save Book</Button>
					</div>
				</div>
			</Col>
        )
    }
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({postBooks},dispatch)
}
export default connect(null, mapDispatchToProps)(BooksForm)
