import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from './actions';

const initialState = {
    comments: [],
    users: []
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case
        ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
                    , ...state]
            });
        default:
            return state;
    }
}