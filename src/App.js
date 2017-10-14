"use strict"
import {createStore} from "redux";
// Step 3 define reducers
const reducer = (state ={}, action) =>{
	switch (action.type) {
		case "POST_BOOK":
			return state = action.payload
			break;
		default:
	}

	return state;
}

// Step 1 create store
const store = createStore(reducer)
store.subscribe(function() {
	console.log('Current state is :', store.getState());
})

// Step 2 create and dispatch actions
store.dispatch({
	type:"POST_BOOK",
	payload: {
		id: 1,
		title: "Book Title",
		description: "Book Description",
		price: 300
	}
})
