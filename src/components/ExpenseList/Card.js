import React from 'react'
import './card.css'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import {deleteExpense, loadExpense,expenseUpdate} from '../../redux/actions/expensesAction'
// toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({item}) => {
    const {amount, category:cate, createdAt, title, id} = item
    const category = JSON.parse(cate)
    const time = moment(createdAt).fromNow()
    const dispatch = useDispatch()
    const {login} = JSON.parse(localStorage.getItem('login'))
    const history = useHistory()
    
    const handleUpdate = (id) => {
        if(login){
            dispatch(expenseUpdate(id))
            history.push('/update')
        }else{
            toast.error('Please Login', {
                position: 'top-right',
                autoClose: 1500,
                newestOnTop: true,
                hideProgressBar: false,
            });
        }
        
    }

    const handleDelete = (id) => {
        if(login){
            toast.success('Expenses Deleted...!', {
                position: 'top-right',
                autoClose: 1500,
                newestOnTop: true,
                hideProgressBar: false,
            });
            dispatch(deleteExpense(id))
            dispatch(loadExpense())
        }else{
            toast.error('Please Login', {
                position: 'top-right',
                autoClose: 1500,
                newestOnTop: true,
                hideProgressBar: false,
            });
        }
    }
    return (
        <>
            <ToastContainer />
            <div className='card-div' style={{borderRight: `6px solid ${category.color}`}}>
                <div className='card-content'>
                    <div className='card-image'>
                        <img src={category.icon.default} alt={category.key} />
                    </div>
                    <div className='card-title'>
                        <h3 className='card-label'>{title}</h3>    
                        <h6 >{time}</h6>
                    </div>
                </div>
                <div className='card-opration'>
                    <label className='card-label'>₹ {amount}</label>
                    <button className='btn-edit' onClick={() => handleUpdate(id)}><i className="fi fi-rr-edit"></i></button>
                    <button className='btn-delete' onClick={() => handleDelete(id)}><i className="fi fi-rr-trash"></i></button>
                </div>
            </div>
        </>
    )
}

export default Card