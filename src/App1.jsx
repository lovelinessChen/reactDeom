import React, { useState } from 'react'
import CgPagination from './components/page/CgPagination'

export default function () {
    const [total, setTotal] = useState(300)
    const [pageSize, setPageSize] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)
    
    //页码发生改变
    const changePage = (page)=>{
        console.log('页码被改变了');
        setCurrentPage(page)
    }
    return (
        <div>
            <h1>
                爸爸组件
            </h1>
            <hr />
            <CgPagination 
            total={total} 
            pageSize={pageSize} 
            currentPage={currentPage} 
            changePage={changePage}
            >

            </CgPagination>
        </div>
    )
}
