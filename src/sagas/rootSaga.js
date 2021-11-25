import {all} from 'redux-saga/effects'
import {expenseSaga} from './expenseSaga'

function* rootSaga(){
    yield all([
        expenseSaga()
    ])
}

export default rootSaga;