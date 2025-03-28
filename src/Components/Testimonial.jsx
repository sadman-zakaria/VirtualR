import React from 'react'
import { testimonials } from '../constants'

const Testimonial = () => {
  return (
    <>
       <div className=' mt-20  tracking-wide  '>

           <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>What People are saying

           </h2>

           <div className='flex flex-wrap justify-center'>
               {
                testimonials.map((Testimonial, index)=>(
                    <div key={index} className='w-full sm:w-1/2  lg:w-1/3 px-4 py-2'>
                        <div className='bg-neutral rounded-md p-6 border border-neutral-800  font-thin text-md'>
                            <p className='text-neutral-300'>{Testimonial.text}</p>

                            <div className='flex mt-8 items-start'>
                                <img className='w-14 h-14 mr-6 border-neutral-400 border-2 rounded-full' src={Testimonial.image} alt={Testimonial.user} />
                                 
                                 <div className=''>
                                   <h5>{Testimonial.user}</h5>
                                   <h5 className='text-sm font-normal italic text-neutral-600'>{Testimonial.company}</h5>
                                 </div>
                            </div>
                        </div>
                    </div>
                ))
               }
           </div>
       </div>
    </>
  )
}

export default Testimonial
