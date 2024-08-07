import React, { useState } from 'react'

const Inputcompo = ({placevalue,name,onChange}) => {
   
  return (
    <div>
       
    <div className=' flex flex-col items-center justify-center'>

        <div>
        <div className='font-semibold pt-5 pb-2'>{name}</div> 
    <input className='border border-slate-300 rounded p-2 w-80 text-gray-600 'type="text"  onChange={onChange} placeholder={placevalue}/>
    </div>
   
    

    </div>
  </div>
  )
}

export default Inputcompo
