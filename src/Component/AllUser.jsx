import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../Redux/Action';

const AllUser = () => {
    const dispatch = useDispatch();
    let [value, setValue] = useState('')
    let [page, setPage] = useState(1);
    let [totalPage, setTotalPage] = useState(0);
    const { users } = useSelector(state => state.user);



    const handleChange = (e) => {
        setValue(e.target.value)
    }


    useEffect(() => {
        let timeout = setTimeout(() => {
            dispatch(getAllUsers(value, page))
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [value, page])

    useEffect(() => {
        // Calculate total pages when users data changes
        const totalPages = users?.total ? Math.ceil(users?.total / 10) : 0;
        if (page > totalPages) {
            // If the current page is greater than the total pages, set it to the last page
            setPage(totalPages);
        }
    }, [users]);

    const getPageNumbers = () => {
        const pagesToShow = 3; // Number of pages to show in the pagination
        const currentPage = page;
        const totalPages = Math.ceil(users?.total / 10) || 1; // Ensure at least 1 page
        const maxPage = Math.min(currentPage + pagesToShow - 1, totalPages);
        const pageNumbers = [];
        for (let i = currentPage; i <= maxPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };
    console.log(getPageNumbers())
    const totalPages = users?.total ? Math.ceil(users?.total / 10) : 0;

    const setHandler = (i) => {
        if (i >= 1 && i <= totalPages) {
            setPage(i);
        }
    }

    return (
        <>
            <div className='col-3 my-3'>
                <input type="text" className="form-control-plaintext border" id="staticEmail2" placeholder='search here' onChange={(e) => handleChange(e)} />
            </div>
            <div className='row'>
                {
                    users?.users?.length !== 0 ?
                        users?.users?.map((ele) => {
                            return (
                                <div className='col-4 border' key={ele.id}>
                                    <p>Name : {ele.firstName} {ele.lastName}</p>
                                    <p>Age : {ele.age}</p>
                                    <img src={ele.image} alt="" className='userimage' />
                                </div>
                            )
                        }) :
                        <p>No data found</p>
                }
            </div>
            <div>
                <span className='btn'
                    onClick={() => setHandler(page - 1)}>prev</span>
                {/* {[...Array(totalPages)].map((_, i) => {
                    return (
                        <span
                            className={`btn ${i + 1 === page ? 'active' : ''}`}
                            onClick={() => setHandler(i + 1)}>{i + 1}
                        </span>
                    )
                })} */}
                {getPageNumbers().map((pageNum) => (
                    <span
                        className='btn'
                        onClick={() => setHandler(pageNum)} key={pageNum}
                    >
                        {pageNum + 1}
                    </span>
                ))}
                <span className='btn' onClick={() => setHandler(page + 1)}>next</span>
            </div>
        </>
    )
}

export default AllUser