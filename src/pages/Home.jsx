import React from 'react'
import Navbar from '../components/Navbar'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='flex mb-[40px] mt-5 px-[150px] h-[70px] items-center justify-between'>
        <h3 className='text-2xl'>Hi, Wim</h3>

        <div className='inputBox'>
          <input type="text" className='w-[27vw]' placeholder='Search...'/>
        </div>
      </div>
      <div className="blogs px-[150px]">
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
      </div>
    </>
  )
}

export default Home