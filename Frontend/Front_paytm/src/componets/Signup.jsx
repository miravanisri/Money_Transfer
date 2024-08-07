import React, { useState } from 'react'
import Text from '../SignComponents/Text'
import Downtext from '../SignComponents/Downtext'
import Inputcompo from '../SignComponents/Inputcompo'
import Button1 from '../SignComponents/Button1'
import Already from '../SignComponents/Already'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
const [Firstname,setFirstName]=useState('');

const [Lastname,setLastName]=useState('');

const [Username,setUserName]=useState('');

const [Password,setPassword]=useState('');

const navigate=useNavigate();


  return (
    <div>
       
        <Text heading={'Sign Up'}/>
        <Downtext subHeading={'Enter Your information to create an'}></Downtext>
        
        <Inputcompo  placevalue={"John"} name={"First Name"} onChange={(e)=>setFirstName(e.target.value)} />
        <Inputcompo  placevalue={"Doe"} name={"Last Name"} onChange={(e)=>setLastName(e.target.value)} />
        <Inputcompo  placevalue={"johndoe@example.com"} name={"Email"} onChange={(e)=>setUserName(e.target.value)}/>
        <Inputcompo  placevalue={""} name={"Password"} onChange={(e)=>setPassword(e.target.value)}/>
      
    <Button1 button_value={"Sign Up"} onClick={
async()=>{
const response=await axios.post("http://localhost:3000/api/v1/User/signup",{
Username,
Firstname,
Lastname,
Password


});
localStorage.setItem("token",response.data.token)
navigate("/Dashboard");
}}

/>

    <Already subText={" Already have an account?"} SL={"Login"} to={"/signin"}/>
    




      

       

    </div>
  )
}

export default Signup
