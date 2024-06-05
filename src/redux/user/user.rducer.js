
import { CURRENTUSER, TOKEN } from "./user.constant";
import Cookie from "js-cookie";

const initialState = {
    currentUser: null,
    token: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENTUSER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case TOKEN:
            return {
                ...state,
                token: Cookie.get('accessToken'),
            };
        default:
            return { ...state };
    }
};

export default userReducer;