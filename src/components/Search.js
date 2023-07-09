import React from 'react';
import { useGlobalContext } from './ContextApi';


const Search = () => {
  const {query, searchStory} = useGlobalContext();
  return (
    <div>
      <h1 style={{color:"whitesmoke"}}>Blog App</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input 
          type="text"
          placeholder="Search here"
          value={query}
          onChange={(e) => searchStory(e.target.value)} 
          className='searchBar'
          />
        </div>
      </form>
    </div>
  )
}

export default Search