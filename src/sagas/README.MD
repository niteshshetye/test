REDUX-SAGA: 
---------------------   
- Redux Saga is Library that aims to make application side effects easier to manage.
- Redux Saga is capable of listening to acitons that are dispatched.
- Redux Saga also is capable of dispatching actions.
- Redux Saga is a middleware.
- In Redux Saga, every Saga is genrator function.

TYPES OF SAGAS: 
---------------------
- Watcher Saga **Watches For the action dispatches, and would assign a worker saga for the action**
- Worker Saga **Would do the work get the response (from an api mostly) and would dispatch an action**
- Root Saga **Combination of all the sagas that we create**

EFFECTS: https://redux-saga.js.org/docs/api/#effect-creators
---------------------
- takeEvery()  **Listen to the actions**
- takeLatest() 
- call() **Call an api (Pormise-based)**
- put() **Dispatch an action**
- all() **Compose all the sagas**

AGENDA: 
---------------------
API Integration (Calling the Services)
---------------------
- Add Task
- List Task
- Delete Task

