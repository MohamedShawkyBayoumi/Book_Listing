import { TOGGLE_EDIT_MODE } from '../constants';

const initial_state = {
    edit_mode: false
};

const generalReducer = (state = initial_state, action) => {
    switch(action.type){
        case TOGGLE_EDIT_MODE:
            return {
                edit_mode: !state.edit_mode
            }
        default:
            return state;
    }
}

export default generalReducer;