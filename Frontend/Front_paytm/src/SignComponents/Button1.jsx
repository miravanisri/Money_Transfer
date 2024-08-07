import React from 'react'

const Button1 = ({button_value,bgColor,onClick}) => {
  return (
    <div className='flex flex-col items-center justify-center pt-5'>
      <input className={`border border-black rounded-md w-80 p-2 ${bgColor? bgColor:'bg-black'} text-white font-semibold cursor-pointer`} type="button" value={button_value} onClick={onClick} />
     
    </div>
  )
}

export default Button1
