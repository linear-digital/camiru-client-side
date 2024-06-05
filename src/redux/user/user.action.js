import { CURRENTUSER } from "./user.constant";


export const setCurrentUser = (user) => ({
    type: CURRENTUSER,
    payload: user
})