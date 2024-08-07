import React, { useState } from 'react'
import Logo from '../DashboardCompo/Logo'
import Inputcompo from '../SignComponents/Inputcompo'
import Button1 from '../SignComponents/Button1'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import { response } from 'express'

const Send = () => {

  const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center'>
        <div className=' bg-white border w-96 h-80'>

<div className='font-bold text-center text-2xl mt-6'>Send Money</div>

<div className='mt-12 ml-6'>
<span className=' ml-2 inline-flex items-center justify-center rounded-full border border-slate-200 bg-green-500 p-2 text-lg h-10 w-10 text-white'>{name[0].toUpperCase()}</span> <span className='font-bold text-lg'>{name}</span>

</div>
<div className='ml-9 text-xs font-semibold'>
  Amount(in Rs)

</div>
<div>
<input className='border border-slate-300 rounded mt-3  p-2 w-72 text-gray-600 ml-10 'type="text"  onChange={(e) => {
                            setAmount(e.target.value);
                        }} placeholder="Enter amount"/>
 
</div>


<div>
<button onClick={() => {
                        axios.post("http://localhost:3000/api/v1/Account/transfer", {
                            to: id,
                            amount:amount
                        }, {
                            headers: {
                                authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                    }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button>
</div>
        </div>
      
    </div>
  )
}


export default Send;

