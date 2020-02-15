import data from '../Data/books.json';
import { ADD_BOOK, EDIT_BOOK, SEARCH_BOOK } from '../constants';

const initial_state = {
    items: [...data.books]
};

const booksReducer = (state = initial_state, action) => {
    switch(action.type){
        case ADD_BOOK:
            return {
                items: [action.payload, ...state.items]
            }
        case EDIT_BOOK:
            const books = [...state.items];
            let index = books.findIndex(book => book.id === action.payload.id);
            books[index] = action.payload;
            return {
                items: [...books]
            }
        case SEARCH_BOOK:
            let filteredBooks = data.books.filter(book => book.title.includes(action.payload.toLowerCase()));
            if(action.payload  === ''){
                return {
                    items: [...data.books]
                }
            }
            return {
                items: [...filteredBooks]
            }
        default:
            return state;
    }
}

export default booksReducer;