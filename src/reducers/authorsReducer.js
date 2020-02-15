import data from '../Data/books.json';
import { ADD_AUTHOR, EDIT_AUTHOR } from '../constants';

const initial_state = {
    items: [...data.authors]
};

const authorsReducer = (state = initial_state, action) => {
    switch(action.type){
        case ADD_AUTHOR:
            return {
                items: [...state.items, action.payload]
            }
        case EDIT_AUTHOR:
            const authors = [...state.items];
            let index = authors.findIndex(author => author.id === action.payload.id);
            authors[index] = action.payload;
            return {
                items: [...authors]
            }
        default:
            return state;
    }
}

export default authorsReducer;