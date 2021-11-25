import React, { Component } from 'react'

// Routes
import {Switch, Route, BrowserRouter} from 'react-router-dom'

// css
import './App.css'

// components
import Home from './pages/Home'
import Expense from './pages/Expense'
import RegistrationForm from './pages/Register'
import LoginForm from './pages/Login'
import UpdateExpense from './components/updateExpense'

// contexts
import LoginState from './context/LoginState'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <LoginState>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/expense'>
                            <Expense />
                        </Route>
                        <Route exact path='/update'>
                            <UpdateExpense />
                        </Route>
                        <Route exact path='/register'>
                            <RegistrationForm />
                        </Route>
                        <Route exact path='/login'>
                            <LoginForm />
                        </Route>
                    </Switch>           
                </LoginState>
            </BrowserRouter>
        )
    }
}
