import React, {useState} from 'react'
import logo from '../images/logo.png'
import banner from '../images/banner.png'
import {api_base_url} from '../helper'
import {Link, useNavigate} from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const submit = (e) => {
    e.preventDefault();
    fetch(api_base_url + "/login", {
      mode: "CORS",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: pwd
      })
    }).then(res => res.json()).then(data => {
      if(data.success == false){
        setError(data.msg)
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("isLoggedIn", true);
        navigate("/");
      }
    })
  }

  return (
    <>
        <div className='container bg-[#FFFFFF] w-screen h-screen flex items-center justify-between  px-[50px] pr-0'>
            <form onSubmit={submit} action="">
                <img className='w-[175px]' src={logo} alt=''/>

                <div className='inputBox mt-4'>
                  <input type="email" required onChange={(e)=> {setEmail(e.target.value)}} value={email} className='w-[27vw]' placeholder='Email' name='email' id='email'/>
                </div>
                <div className='inputBox mt-4'>
                  <input type="password" required onChange={(e)=> {setPwd(e.target.value)}} value={pwd} className='w-[27vw]' placeholder='Password' name='password' id='password'/>
                </div>
                <p className='mt-3 mb-3'>Don't have an account <Link className='text-[#3797EF]' to="/signUp">Sign Up</Link></p>
                <p className='text-red-500 text-[14px]'>{error}</p>
                <button className="btnBlue w-[27vw] mt-[20px]">Login</button>
            </form>
            <div className='right'>
              <img className='' src={banner} alt=''/>
            </div>
        </div>
    </>
  )
}

export default Login