import React from 'react'
import { useGlobalContext } from './ContextApi'

const Pagination = () => {
  const {page, getPreviousPage, getNextPage, nbPages} = useGlobalContext();
  return (
    <div className="pagination-container">
      <button onClick={getPreviousPage}>Previous</button>
      <p>{page + 1} of {nbPages} Pages</p>
      <button onClick={() => getNextPage()}>Next</button>
    </div>
  )
}

export default Pagination