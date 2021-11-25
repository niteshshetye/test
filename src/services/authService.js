import axios from 'axios'
import { registerUserUrl, loignUserUrl } from '../config/APIEndpoint'


export const registerUser = (user) => {
    return axios.post(registerUserUrl, user)
}

export const loginUser = (username) => {
    return axios.post(loignUserUrl, username)
}