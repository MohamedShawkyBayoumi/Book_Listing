import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import authorsReducer from './authorsReducer';
import categoriesReducer from './categoriesReducer';
import generalReducer from './generalReducer';

const reducer = combineReducers({
    books: booksReducer,
    authors: authorsReducer,
    categories: categoriesReducer,
    general: generalReducer
});

export default reducer;