import { CLASSROOM } from "./class.constant";


const initialState = {
    classrooms: [],
};


const classReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLASSROOM:
            return {
                ...state,
                classrooms: action.payload,
            };
        default:
            return { ...state };
    }
};

export default classReducer;