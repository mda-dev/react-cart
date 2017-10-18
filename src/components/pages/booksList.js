"use strict"
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Grid, Col ,Row, Button} from 'react-bootstrap'

class BooksList extends Component {
	componentDidMount(){
		//Dispatch get books
		this.props.getBooks();
	}
    render() {
		const booksList = this.props.books.map((booksArr) =>{
			let price = booksArr.price.toFixed(2);
			return(
				<Col xs={6} md={4} key={booksArr.id}>
					<div className="card">
						<img className="card-img-top" src={booksArr.image} alt="Card image cap" />
						<div className="card-body">
							<h4 className="card-title">{booksArr.title}</h4>
							<hr/>
							<h6 className="card-subtitle mb-2">Author: <span className="text-info">{booksArr.author}</span></h6>
							<h6 className="card-subtitle mb-2">Price: <span className="text-info">{price} $</span></h6>
							<h6 className="card-text">Description: {booksArr.description}</h6>

						</div>
						<div className="card-footer">
							<Button bsStyle="primary" >Add to cart <i className="fa fa-cart-plus"></i></Button>
						</div>
					</div>
				</Col>
			)
		})
        return (
            <Grid>
            	<Row style={{marginTop:'15px'}}>
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
