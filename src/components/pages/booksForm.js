"use strict"
import React, {Component, PropTypes} from 'react';
import {Col, Button, FormControl, FormGroup, ControlLabel, InputGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBooks, deleteBooks} from '../../actions/booksActions';
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
    handleDeleteBook(){
        let bookToDelete = findDOMNode(this.refs.delete);
        this.props.deleteBooks(bookToDelete.value);
    }
    render() {

        const booksList = this.props.books.map((booksArr) =>{
            return(
                <option key={booksArr._id}value={booksArr._id}>{booksArr.title}</option>
            )
        })
        return (
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
                        <Button onClick={this.handleBookSubmit.bind(this)} bsStyle="primary" >Save Book</Button>
					</div>
					<div className="card-footer">
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Delete book</ControlLabel>
                            <FormControl ref="delete" componentClass="select" placeholder="select">
                                <option value="select">select</option>
                                {booksList}
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <Button bsStyle="danger" onClick={this.handleDeleteBook.bind(this)}> Delete <i className="fa fa-trash"></i></Button>
                        </FormGroup>

					</div>
				</div>

        )
    }
}
function mapStateToProps(state) {
    return{
        books : state.books.books
    }
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({postBooks, deleteBooks}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksForm)
