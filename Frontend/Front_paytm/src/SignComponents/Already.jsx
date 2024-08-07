import React from 'react'
import { Link } from 'react-router-dom'

const Already = ({subText,SL,to}) => {
  return (
    <div className='flex justify-center font-medium pt-3'>
      {subText}<Link className='underline cursor-pointer ' to={to}>{SL}</Link>
    </div>
  )
}

export default Already
