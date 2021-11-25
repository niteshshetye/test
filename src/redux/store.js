import {createStore, applyMiddleware, compose} from 'redux'

// reducer
import {rootReducer} from './reducers'

// saga
import rootSaga from '../sagas/rootSaga'

// middleware
import createSagaMiddleware from '@redux-saga/core'
// import logger from 'redux-logger'

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, compose(applyMiddleware(saga), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

saga.run(rootSaga)
