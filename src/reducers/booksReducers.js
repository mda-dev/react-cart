"use strict"
//BOOKS REDUCERs
export function booksReducers(state ={books:[]}, action){
	switch (action.type) {
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
				return book.id === action.payload.id
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
				return book.id === action.payload.id
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
