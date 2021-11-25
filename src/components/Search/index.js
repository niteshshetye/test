import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {expenseSearch} from '../../redux/actions/expensesAction'

import './search.css'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleonKeyUp = (e) =>{
        if(e.key === "Enter"){
            dispatch(expenseSearch(searchValue))
        }
    }

    return (
        <div className='search-div'>
            <div className='search-bar'>
                <i className="fi fi-rr-search" ></i>
                <input type='text' value={searchValue} onKeyPress={handleonKeyUp} onChange={handleChange}  placeholder='Search Here...!' />
            </div>
        </div>
    )
}

export default Search;
