import React from 'react'

import Topfold from '../../components/Topfold'
import FormExpense from '../../components/FormExpense'
import NavBar from '../../components/NavBar'

import './expense.css'
const Expense = () => {
    return (
        <>
        <NavBar />
        <div className='expense-div'>
            <Topfold />
            <div className='expense-form'>
                <FormExpense /> 
            </div>
        </div>
        </>
    )
}

export default Expense;
