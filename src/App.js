"use strict"
import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger'

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions'
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

// Step 1 create store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)
// store.subscribe(function() {
// 	console.log('Current state is :', store.getState());
// })

// Step 2 create and dispatch actions
store.dispatch(postBooks(
	[
		{
			id: 1,
			title: "Book Title",
			description: "Book Description",
			price: 30.99
		},
		{
			id: 2,
			title: "Book Title 2",
			description: "Book Description 2",
			price: 2.00
		}
	]
))

//Dispatch new Book
store.dispatch(updateBooks(
	{
			id: 1,
			title: "Book Title 3",
			description: "Book Description 3",
			price: 32.00
	}
))

//Dispatch delete Book
store.dispatch(deleteBooks({ id: 1 }));

//Dispatch add to cart
store.dispatch( addToCart([{id:1}]) )
