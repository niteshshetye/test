import React, {useState} from 'react'
import { useHistory } from 'react-router';
import LoginContext from './LoginContext';

const LoginState = (props) => {
    const [login, setLogin] = useState(false);
    const history = useHistory()

    const handleLoginSuccess = (data) => {
        setLogin(true)
        const authUser = {login: true, token: data.accessToken, userId: data.userId}
        localStorage.setItem('login', JSON.stringify(authUser))
        history.push('/')
    }

    const handleLogout = () => {
        setLogin(false)
        const authUser = {login: false}
        localStorage.setItem('login', JSON.stringify(authUser))
        history.push('/login')
        
    }
    const handleLoginClick = () => {
        history.push('/login')
    }

    return (
        <LoginContext.Provider value={{login, setLogin, handleLoginSuccess, handleLogout, handleLoginClick}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState;