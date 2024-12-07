/* eslint-disable no-useless-catch */
import axios from "axios";
import Cookie from "js-cookie";
import { decrypt, encrypt } from "./security";

const local = "http://localhost:4000/api"
const server = 'https://server.camiru.com/api'
const url = local
export const api = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
        "token": Cookie.get('token-camiru2')
    },
});


export const fetcher = async ({ url, method, data, headers }) => {
    try {
        const res = await api({
            url: url,
            method: method ? method : 'GET',
            data: {
                data: encrypt(data)
            } ,
            headers
        });
        return decrypt(res.data)
    } catch (error) {
        throw error
    }
}

export const upload = axios.create({
    baseURL: url,
    headers: {
        "token": Cookie.get('token-camiru2')
    },
});

export const imageUrl = (url) => {
    if (url === "/default-profile.png") {
        return url
    }
    
    const local = "http://localhost:4000"
    const server = 'https://server.camiru.com'
    return `${local}/${url}`
}

export default api