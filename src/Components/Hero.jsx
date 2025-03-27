import React from 'react'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <>
     <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-8xl text-center tracking-wide'>
            VirtualR build tools <span className='bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text'>for</span> <br />
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
             developer
            </span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Empower your creativity and bring your VR app ideas to life with our intuitive development tools.
        Get started today and turn your imagination into immersive reality!</p>

        <div className='flex justify-center my-10'>
        <a href="#" className='py-3 px-4 mx-3  rounded-md bg-gradient-to-r from-orange-500 to-orange-800 '> start fro free</a>
        <a href="#" className='py-3 px-4 mx-3 border rounded-md hover:bg-gray-800 hover:transition-all hover:duration-700'>Documantaion</a>
        </div>

        <div className='flex mt-10 justify-center '>
            <video autoPlay loop muted className='rounded-2xl w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                <source src='video1.mp4' type='video/mp4' />
                your browser doesn't suppport the video
            </video>

            <video autoPlay loop muted className='rounded-2xl w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                <source src='video2.mp4' type='video/mp4' />
                your browser doesn't suppport the video
            </video>

        </div>
     </div>
       
    </>
  )
}

export default Hero
