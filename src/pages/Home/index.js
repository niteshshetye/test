import React from 'react'
import './home.css'

import NavBar from '../../components/NavBar'
import Topfold from '../../components/Topfold'
import ExpenseList from '../../components/ExpenseList'

const Home = () => {
    return (
        <>
            <NavBar />
            <div className='main-container'>
                <Topfold />
                <ExpenseList />
            </div>
        </>
    )
}


export default Home;
