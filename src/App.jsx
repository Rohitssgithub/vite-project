// import React, { useEffect, useState } from 'react'

// import './App.css'

// const App = () => {
//   let [product, setProduct] = useState([])
//   let [page, setPage] = useState(1);
//   let [totalPage, setTotalPage] = useState(0);

//   console.log(totalPage)
//   const getApi = async () => {
//     let data = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);
//     let getData = await data.json();
//     console.log(getData)
//     setProduct(getData.products)
//     setTotalPage(getData.total / 10)

//   }
//   useEffect(() => {
//     getApi()
//   }, [page])

// const setHandler = (i) => {
//   setPage(i)
// }
// const getPageNumbers = () => {
//   const pagesToShow = 5; // Number of pages to show in the pagination
//   const currentPage = page;
//   const maxPage = Math.min(currentPage + pagesToShow - 1, totalPage);
//   const pageNumbers = [];
//   for (let i = currentPage; i <= maxPage; i++) {
//     pageNumbers.push(i);
//   }

//   return pageNumbers;
// };

//   return (
//     <>
//       {
//         product.map((ele) => {
//           return (
//             <>
//               <p key={ele.id}>{ele.title}</p>
//             </>
//           )
//         })
//       }

//       <div>
//         <span onClick={() => setHandler(page - 1)}>prev</span>
//         {[...Array(totalPage)].map((_, i) => {
//           return <span className='btn' onClick={() => setHandler(i + 1)}>{i + 1}</span>
//         })}
//         <span onClick={() => setHandler(page + 1)}>next</span>

//         {/* <span onClick={() => setHandler(page - 1)}>prev</span>
//         {getPageNumbers().map((pageNum) => (
//           <span className='btn' onClick={() => setHandler(pageNum)} key={pageNum}>
//             {pageNum}
//           </span>
//         ))}
//         <span onClick={() => setHandler(page + 1)}>next</span> */}
//       </div>
//     </>
//   )
// }

// export default App

import React from 'react';
import AllUser from './Component/AllUser';
import './App.css'

const App = () => {
  return (
    <>
      <AllUser />
    </>
  )
}

export default App
