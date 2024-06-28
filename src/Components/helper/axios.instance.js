import axios from "axios";
import Cookie from "js-cookie";
const local = "http://localhost:4000/api"
const server = 'https://server.camiru.com/api'
const url = local
export const api = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
        "token": Cookie.get('accessToken')
    },
});

export const upload = axios.create({
    baseURL: server,
    headers: {
        "token": Cookie.get('accessToken')
    },
});

export const imageUrl = (url) => {
    return `https://server.camiru.com/${url}`
}

export default api