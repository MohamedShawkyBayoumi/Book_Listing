import { ADD_CATEGORY, EDIT_CATEGORY } from '../constants';

export const addCategory = payload => ({
    type: ADD_CATEGORY,
    payload
});

export const editCategory = payload => ({
    type: EDIT_CATEGORY,
    payload
});