import { combineReducers } from "redux";

import {expensesReducer} from './expensesReducer'

export const rootReducer = combineReducers({
    expens: expensesReducer
})