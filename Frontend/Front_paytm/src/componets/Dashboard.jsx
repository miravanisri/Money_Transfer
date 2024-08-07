import React from 'react'
import Navbar from '../DashboardCompo/Navbar'
import Balance from '../DashboardCompo/Balance'
import Search from '../DashboardCompo/Search'
import Display from '../DashboardCompo/Display'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Balance amount={"5000"}/>
     
      <Display/>
      




    </div>
  )
}

export default Dashboard
