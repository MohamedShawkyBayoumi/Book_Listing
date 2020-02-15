import data from '../Data/books.json';
import { ADD_CATEGORY, EDIT_CATEGORY } from '../constants';

const initial_state = {
    items: [...data.categories]
};

const categoriesReducer = (state = initial_state, action) => {
    switch(action.type){
        case ADD_CATEGORY:
            return {
                items: [...state.items, action.payload]
            }
        case EDIT_CATEGORY:
            const categories = [...state.items];
            let index = categories.findIndex(category => category.id === action.payload.id);
            categories[index] = action.payload;
            return {
                items: [...categories]
            }
        default:
            return state;
    }
}

export default categoriesReducer;