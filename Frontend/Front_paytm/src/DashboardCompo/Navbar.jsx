import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div>
   <div className='grid grid-cols-2 mt-3 border h-12 pt-2 shadow-custom' >
   <div className='text-start ml-3 font-bold text-lg' >Payments App</div> 
     <div className='text-right mr-7'>Hello, User <Logo/>

</div>

   </div>
    

    </div>
  )
}

export default Navbar
