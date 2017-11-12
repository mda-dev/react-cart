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
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'


// Step 1 create store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)

import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './components/main';

const Routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
				<Route path="/" component={Main}>
					<IndexRoute component={BooksList} />
					<Route path="/admin" component={BooksForm} />
					<Route path="/cart" component={Cart} />
				</Route>
		</Router>
	</Provider>
)

render(Routes , document.getElementById('app'))

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
