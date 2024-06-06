import { CHILDFEILD } from "./child.constant";

const initialState = {
    childFeilds: {
        status: "active",
        rotation: "morning",
        
    },
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