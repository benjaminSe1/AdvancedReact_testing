import { SAVE_COMMENT } from "actions/types";

const commentsReducers = (state = [], action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default commentsReducers;
