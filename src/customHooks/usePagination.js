import {useState} from 'react'

const usePagination = (pageSize, data) => {
    const [pageNumber, setPageNumber] = useState(0) 

    // total data visited 
    const dataVisited = pageNumber * pageSize

    // Take the required data 
    const displayData = data.slice(dataVisited, dataVisited + pageSize)

    // total number of pages in pagination
    const pagesCount = Math.ceil(data.length / pageSize)

    // handle page change
    const handlePageChange = ({selected}) => {
        setPageNumber(selected)
    }

    const handlePageNumber = () => {
        setPageNumber(0)
    }

    return {
        displayData,
        pagesCount,
        handlePageChange,
        handlePageNumber
    };
}

export default usePagination;
