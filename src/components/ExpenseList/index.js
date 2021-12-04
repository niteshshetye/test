import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate'

import Card from './Card'
import {loadExpense} from '../../redux/actions/expensesAction'
import usePagination from '../../customHooks/usePagination'

import './expenseList.css'
import './pagination.css'

const ExpenseList = () => {
    const {expensList, query, searchList} = useSelector(state => state.expens)
    const dispatch = useDispatch()
    const {displayData: displayExpense, pagesCount, handlePageChange, handlePageNumber} = usePagination(5, expensList)

    useEffect(()=>{
        dispatch(loadExpense())
    },[dispatch,query])

    useEffect(() => {
        handlePageNumber()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [displayExpense.length === 0])

    return (
        <React.Fragment>
        
            <div>
                {
                    (query && searchList.length !== 0)? (
                        searchList.map(item => 
                            <div key={item._id}>
                                <Card item={item} />
                            </div>
                        )
                    ): (query && searchList.length === 0)? (
                        <div className='empty-search-list'>
                            <h3> No Expense Found...! </h3>
                        </div>
                    ): (!query && expensList.length !== 0)? (
                        displayExpense.map(item => (
                            <div key={item._id}>
                                <Card item={item} />
                            </div>
                        ))
                    ): (
                        <div className='empty-expens-list'> 
                            <img src={require('../../assets/images/empty.png').default} alt='empty' />
                            <label>Uh Oh! Your expense list is empty </label>
                        </div>
                    )
                }
            </div>
            <div className='react-paginate'> 
                {
                    (expensList.length && pagesCount > 1)? (
                        <ReactPaginate 
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            pageCount= {pagesCount}
                            onPageChange={handlePageChange}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            activeClassName={"paginationActive"}
                        />
                    ): null       
                }
            </div>
        </React.Fragment>

    )
}

export default ExpenseList

// {
//     !query && expensList.length? (
//         expensList.map(item => 
//             <div key={item.id}>
//                 <Card key={item.id} item={item} />
//             </div>
//         )
//     ):(
//         <div className='empty-expens-list'> 
//             <img src={require('../../assets/images/empty.png').default} alt='empty' />
//             <label>Uh Oh! Your expense list is empty </label>
//         </div>
//     )
// }

// testing
// {
//     searchList.length? (
//         searchList.map(item => 
//             <div key={item.id}>
//                 <Card key={item.id} item={item} />
//             </div>
//         )
//     ): expensList.length? (
//         expensList.map(item => 
//             <div key={item.id}>
//                 <Card key={item.id} item={item} />
//             </div>
//         )
//     ):(
//         <div className='empty-expens-list'> 
//             <img src={require('../../assets/images/empty.png').default} alt='empty' />
//             <label>Uh Oh! Your expense list is empty </label>
//         </div>
//     )
// }