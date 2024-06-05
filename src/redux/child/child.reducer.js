import { CHILDFEILD } from "./child.constant";

const initialState = {
    childFeilds: {},
};


const childReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHILDFEILD:
            return {
                ...state,
                childFeilds: action.payload,
            };
        default:
            return { ...state };
    }
};

export default childReducer;