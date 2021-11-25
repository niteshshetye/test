import {EXPENSE_ADDED, EXPENSE_LOADED, EXPENSE_DELETED, SEARCH_EXPENSE, EXPENSE_SEARCHED,UPDATE_EXPENSE} from '../actionTypes'

const initialState = {
    expensList: [],
    query: '',
    searchList: [],
    updateExpense: {}
}

export const expensesReducer = (state = initialState , action) => {
    switch (action.type) {
        case EXPENSE_ADDED:
            return {
                ...state,
                expensList: [...state.expensList, action.payload]
            }
        case EXPENSE_LOADED:
            return {
                ...state,
                expensList: action.payload
            }
        case EXPENSE_DELETED:
            const newExpenseList = state.expensList.filter(expense => expense.id !== action.payload)
            return {
                ...state,
                expensList: newExpenseList
            }
        case SEARCH_EXPENSE:
            return {
                ...state,
                query: action.payload
            }
        case EXPENSE_SEARCHED:
            if (state.query === '') {
                return {
                    ...state,
                    searchList: []  
                }
            } else{
                return {
                    ...state,
                    searchList: action.payload
                }
            }
        case UPDATE_EXPENSE:
            const updateExpense = state.expensList.filter(expense => expense.id === action.payload)
            return {
                ...state,
                updateExpense: {...updateExpense[0]}
            }
        default:
            return state
    }
}