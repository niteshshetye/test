import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import LoginContext from '../../context/LoginContext'

import './navbar.css'

const NavBar = () => {
    const {handleLogout, handleLoginClick} = useContext(LoginContext)
    const {login} = JSON.parse(localStorage.getItem('login'))

    return (
        <nav className='nav-container'>
            <div className='nav-heading'>
                <Link to='/' className='nav-heading'>
                    Smart Expenser <i className="fi fi-rr-credit-card"></i>
                </Link>
            </div>
            
            <div className='nav-body'>
                {
                    !login? (   
                        <button className='btn-logout' onClick={handleLoginClick}>
                            Login
                        </button>
                    ):(
                        <button className='btn-logout' onClick={handleLogout}>
                            Logout
                        </button>
                    )
                }  
                <a href="https://github.com/niteshshetye" target='_blank' rel='noopener noreferrer'>
                    <i className="devicon-github-original colored"></i>
                    GitHub
                </a>
            </div>
        </nav>
    )
}

export default NavBar
