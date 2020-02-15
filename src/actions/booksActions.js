import { ADD_BOOK, EDIT_BOOK, SEARCH_BOOK } from '../constants';

export const addBook = payload => ({
    type: ADD_BOOK,
    payload
});

export const editBook = payload => ({
    type: EDIT_BOOK,
    payload
});

export const searchBook = payload => ({
    type: SEARCH_BOOK,
    payload
});