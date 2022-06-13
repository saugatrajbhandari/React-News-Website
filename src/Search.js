import React, {useContext} from 'react'


import { AppContext } from './context'


const Search = () => {
  const {query, searchData} = useContext(AppContext)
  return (
    <div>
      <h1>Get news about tech</h1>
      <form action="" onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" name="" id="" placeholder='Search...' value={query} onChange={(e)=>searchData(e.target.value)}/>
      </form>
    </div>
  )
}

export default Search