import axios from 'axios'
import { expenseURL } from '../config/APIEndpoint'
// http://localhost:5000/expenseList?q=mac%20mini%20m1

// const {userId} = JSON.parse(localStorage.getItem("login"))
export const getExpenses = () => {
    return axios.get(expenseURL).then(res => res.data)
}

export const searchExpenses = (query) => {
    return axios.get(expenseURL+'?q='+query).then(res => res.data)
}

export const addExpense = (data) => {
    return axios.post(expenseURL, data).then(res => res.data)
}

export const updateExpense = data => {
    return axios.put(expenseURL+ '/' + data.id, data)
}
export const deleteExpense = (id) => {
    return axios.delete(expenseURL + '/' + id).then(res => res.data)
}