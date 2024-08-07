import React, { useState } from 'react'

const Search = ({onChange}) => {
   
  return (
    <div>
      <div>
      <div className='text-base font-bold mt-12 ml-2 '>Users</div>
      <div className='mb-6'>
      <input className='border border-slate-300 rounded  p-2 w-11/12 text-gray-600 ml-2 mt-4 'type="text"  onChange={onChange} placeholder="Search users..."/>



      </div>




      </div>



    </div>
  )
}

export default Search
