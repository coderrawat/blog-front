import React from 'react'
import blog from "../images/blog.png"

const Blog = () => {
  return (
    <>
        <div className="blog mb-3 p-[10px] flex items-center bg-[#FAFAFA] rounded-lg cursor-pointer">
            <img className='w-[170px] rounded-lg' src={blog} alt="" />
            <div className='ml-3 w-full relative flex h-[100px]'>
                <div className='w-full'>
                    <h3 className='text-[20px] font-bold'>Change Management And Large Scale Implementations</h3>
                    <p className='text-[gray]'>How much time was spent on Change Management as part of your last software implementation? </p>
                </div>     
                <p className='text-[gray] flex text-[14px] absolute bottom-[10px]'>
                  July 28, 2021 Richard Foster
                </p>
            </div>
        </div>
    </>
  )
}

export default Blog