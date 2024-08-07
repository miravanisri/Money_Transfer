import React, { useState } from 'react'
import Text from '../SignComponents/Text'
import Downtext from '../SignComponents/Downtext'
import Inputcompo from '../SignComponents/Inputcompo'
import Button1 from '../SignComponents/Button1'
import Already from '../SignComponents/Already'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
  const[Username,setUserName]=useState('');
  const[Password,setPassword]=useState('');
  const navigate=useNavigate();
  return (
    <div>
          <Text heading={'Sign In'}/>
        <Downtext subHeading={'Enter Your credentials to access your'}></Downtext>
        <Inputcompo  placevalue={"johndoe@example.com"} name={"Email"} onChange={(e)=>setUserName(e.target.value)}/>
        <Inputcompo  placevalue={""} name={"Password"} onChange={(e)=>setPassword(e.target.value)}/>
        <Button1 button_value={"Sign In"} onClick={async()=>{
            
         const response=await axios.post('http://localhost:3000/api/v1/User/signin',{

Username,
Password


})
navigate('/Dashboard')





        }} />
        <Already subText={"Don't have an account?"} SL={"Sign Up"} to={"/Signup"}/>

        

    </div>
  )
}

export default Signin
