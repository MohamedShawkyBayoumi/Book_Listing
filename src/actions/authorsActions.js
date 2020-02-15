import { ADD_AUTHOR, EDIT_AUTHOR } from '../constants';

export const addAuthor = payload => ({
    type: ADD_AUTHOR,
    payload
});

export const editAuthor = payload => ({
    type: EDIT_AUTHOR,
    payload
});
