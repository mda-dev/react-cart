"use strict"
//BOOKS REDUCERs
export function booksReducers(state ={
	books:[
		{
			_id: 1,
			title: "A Gamme of Thrones",
			description: "A Clash of Kings",
			author: "George R.R. Martin",
			image: "/book.ico",
			price: 35.45
		},
		{
			_id: 2,
			title: "A Clash of Kings",
			description: "Book Description 2",
			author: "George R.R. Martin",
			image: "/book.ico",
			price: 36.00
		},{
			_id: 3,
			title: "A Storm of Swords",
			description: "Book Description 2",
			author: "George R.R. Martin",
			image: "/book.ico",
			price: 38.00
		}]
	}, action){
	switch (action.type) {
		//GET_BOOKS
		case "GET_BOOKS":
			return {...state, books:[...state.books]}
			break;
		// CREATE BOOK REDUCER
		case "POST_BOOK":
			// let books = state.books.concat(action.payload)
			// return {books};
			return {books:[...state.books, ...action.payload]}
			break;
		// DELETE BOOK REDUCER
		case "DELETE_BOOK":
			const currentBookToDelete = [...state.books];
			const indexToDelete = currentBookToDelete.findIndex((book) => {
				return book._id === action.payload._id
			})
			return {books: [
				...currentBookToDelete.slice(0,indexToDelete),
				...currentBookToDelete.slice(indexToDelete + 1)
			]}
			break;
		// UPDATE BOOK REDUCER
		case "UPDATE_BOOK":
			const currentBookToUpdate = [...state.books];
			const indexToUpdate = currentBookToUpdate.findIndex((book) => {
				return book._id === action.payload._id
			})
			const newBookToUpdate = {
				...currentBookToUpdate[indexToUpdate],
				title: action.payload.title
			}
			console.log("What is it newBookToUpdate", newBookToUpdate);
			return {books:[
				...currentBookToUpdate.slice(0, indexToUpdate),
				newBookToUpdate,
				...currentBookToUpdate.slice(indexToUpdate+1)
			]}
			break;
		default:
	}

	return state;
}
