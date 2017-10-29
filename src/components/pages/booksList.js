"use strict"
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Grid, Row,Col} from 'react-bootstrap';
import BookItem from './bookItem';
import BooksForm from './booksForm';

class BooksList extends Component {
	componentDidMount(){
		//Dispatch get books
		this.props.getBooks();
	}
    render() {
		const booksList = this.props.books.map((booksArr) =>{
			return(

					<BookItem
						key={booksArr.id}
						id={booksArr.id}
						author={booksArr.author}
						description={booksArr.description}
						image={booksArr.image}
						price={booksArr.price}
						title={booksArr.title}
						/>

			)
		})
        return (
            <Grid>
            	<Row style={{marginTop:'15px'}}>
					<BooksForm/>
					{booksList}
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
