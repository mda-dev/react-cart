"use strict"
import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger';
import {Provider} from 'react-redux';

// IMPORT REACT
import React from 'react';
import {render} from 'react-dom';
// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions'
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

// Step 1 create store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)

import BooksList from './components/pages/booksList';
import Menu from './components/menu'
render(
	<Provider store={store}>
		<div>
			<Menu />
			<BooksList />
		</div>
	</Provider>, document.getElementById('app')
)

// Step 2 create and dispatch actions
// store.dispatch(postBooks(
// 	[
// 		{
// 			id: 1,
// 			title: "Book Title",
// 			description: "Book Description",
// 			price: 30.99
// 		},
// 		{
// 			id: 2,
// 			title: "Book Title 2",
// 			description: "Book Description 2",
// 			price: 2.00
// 		}
// 	]
// ))
