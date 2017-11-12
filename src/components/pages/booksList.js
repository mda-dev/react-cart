"use strict"
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Grid, Row,Col} from 'react-bootstrap';
import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';

class BooksList extends Component {
	componentDidMount(){
		//Dispatch get books
		this.props.getBooks();
	}
    render() {
		const booksList = this.props.books.map((booksArr) =>{
			return(

					<BookItem
						key={booksArr._id}
						_id={booksArr._id}
						author={booksArr.author}
						description={booksArr.description}
						image={booksArr.image}
						price={booksArr.price}
						title={booksArr.title}
						/>

			)
		})
        return (
            <Grid className="mt-5">
				<Row>
					<Col xs={12} md={12} sm={12}>
						<Cart/>
					</Col>
				</Row>
            	<Row style={{margin:'15px 0'}}>
					<Col xs={12} md={3} sm={3}>
						<BooksForm/>
					</Col>

					<Col xs={12} md={9} sm={9}>
						<Row>
							{booksList}
						</Row>
					</Col>

				</Row>
            </Grid>
        );
	}
}
function mapStateToProps(state){
	return	{books: state.books.books}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getBooks: getBooks}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
