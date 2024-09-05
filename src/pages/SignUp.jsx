import React, {useState} from 'react'
import logo from '../images/logo.png'
import banner from '../images/banner.png'
import {Link, useSubmit} from "react-router-dom"

const SignUp = () => {

  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")

  const [error, setError] = useState("")

  const submit = (e) => {
    e.preventDefault();
  }

  return (
    <>
        <div className='container bg-[#FFFFFF] w-screen h-screen flex items-center justify-between  px-[50px] pr-0'>
            <form onSubmit={submit} action="">
                <img className='w-[175px]' src={logo} alt=''/>
                <div className='inputBox mt-4'>
                  <input type="text" required  onChange={(e)=> {setUsername(e.target.value)}} value={username} className='w-[27vw]' placeholder='Username' name='username' id='username'/>
                </div>
                <div className='inputBox mt-4'>
                  <input type="text" required onChange={(e)=> {setName(e.target.value)}} value={name} className='w-[27vw]' placeholder='Name' name='name' id='name'/>
                </div>
                <div className='inputBox mt-4'>
                  <input type="email" required onChange={(e)=> {setEmail(e.target.value)}} value={email} className='w-[27vw]' placeholder='Email' name='email' id='email'/>
                </div>
                <div className='inputBox mt-4'>
                  <input type="password" required onChange={(e)=> {setPwd(e.target.value)}} value={pwd} className='w-[27vw]' placeholder='Password' name='password' id='password'/>
                </div>
                <p className='mt-3 mb-3'>Already have an account <Link className='text-[#3797EF]' to="/login">Login</Link></p>
                <p className='text-red-500 text-[14px]'>{error}</p>
                <button className="btnBlue w-[27vw] mt-[20px]">Sign Up</button>
            </form>
            <div className='right'>
              <img className='' src={banner} alt=''/>
            </div>
        </div>
    </>
  )
}

export default SignUp