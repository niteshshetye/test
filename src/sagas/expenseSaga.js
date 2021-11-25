import {takeEvery, call, put, all} from 'redux-saga/effects'

import * as actionTypes from '../redux/actionTypes'
import * as service from '../services/ExpenseServices'
import * as actions from '../redux/actions/expensesAction'


// Worker Sagas
function* loadExpense(){
    const expenses = yield call(service.getExpenses)
    yield put(actions.expenseLoaded(expenses))
}
function* addExpense(action){
    const expense = yield call(service.addExpense, action.payload)
    yield put(actions.expenseAdded(expense))
}
function* deleteExpense(action){
    yield call(service.deleteExpense, action.payload)
    yield put(actions.expenseDeleted(action.payload))
}
function* searchExpense(action){
    const searchResult = yield call(service.searchExpenses, action.payload)
    yield put(actions.searchedExpense(searchResult))
}


// Watcher
function* watchLoadExpenses(){
    yield takeEvery(actionTypes.LOAD_EXPENSE, loadExpense)
}
function* watchAddExpense(){
    yield takeEvery(actionTypes.ADD_EXPENSE, addExpense)
}
function* watchDeleteExpense(){
    yield takeEvery(actionTypes.DELETE_EXPENSE, deleteExpense)
}
function* watchSearchExpense(){
    yield takeEvery(actionTypes.SEARCH_EXPENSE, searchExpense)
}

export function* expenseSaga(){
    yield all([
        watchLoadExpenses(),
        watchAddExpense(),
        watchDeleteExpense(),
        watchSearchExpense()
    ])
}