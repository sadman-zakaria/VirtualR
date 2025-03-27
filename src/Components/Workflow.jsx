import React from 'react'
import {checklistItems} from '../constants/index'
import { CheckCircle2 } from 'lucide-react'

const Workflow = () => {
  return (
    <>
       <div className='mt-20'> 
           <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>Accelerate your <span className='bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text'>coding workflow.</span>
           </h2>

           <div className='flex flex-wrap justify-center'>
               <div className='p-2 w-full lg:w-1/2'>
                 <img src='code.jpg' alt="" />
               </div>
               <div className=' pt-12 w-full lg:w-1/2'>
                 {
                  checklistItems.map((checklistItems, index)=>(
                    <div key={index} className='flex mb-12'>
                      <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 р-2
                      justify-center items-center rounded-full'>
                        <CheckCircle2/>
                      </div>
                      <div className=''>
                        <h5 className='mt-1 mb-2 text-xl
                        '>{checklistItems.title}</h5>
                        <p className='text-md text-neutral-500'>{checklistItems.description}</p>
                      </div>
                    </div>
                  ))
                 }
               </div>
           </div>
       </div>
    </>
  )
}

export default Workflow
