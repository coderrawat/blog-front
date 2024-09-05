import React from 'react'
import logo from '../images/logo.png'
import Avatar from 'react-avatar'

const Navbar = () => {
  return (
    <>
      <div className="navbar h-[100px] px-[150px] bg-[#FAFAFA] flex items-center justify-between">
        <img className='w-[175px]' src={logo} alt=''/>
        <Avatar round="50%" className='cursor-pointer' name="Wim Mostmans" size="45" />
      </div>
    </>
  )
}

export default Navbar