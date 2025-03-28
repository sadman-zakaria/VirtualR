import React from 'react'
import { resourcesLinks,communityLinks ,platformLinks } from '../constants'

const Footer = () => {
  return (
    <>
        <footer className='mt-20 border-t py-10  border-neutral-700'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className=''>
                    <h3 className='font-semibold mb-4'>Resource</h3>
                    <ul className='space-y-2'>
                        {resourcesLinks.map((link,index)=>(
                            <li key={index}>
                                <a className='text-neutral-300 hover:text-neutral-400' href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className=''>
                    <h3 className='font-semibold mb-4'>Platform</h3>
                    <ul className='space-y-2'>
                        {platformLinks.map((link,index)=>(
                            <li key={index}>
                                <a className='text-neutral-300 hover:text-neutral-400' href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className=''>
                    <h3 className='font-semibold mb-4'>community</h3>
                    <ul className='space-y-2'>
                        {communityLinks.map((link,index)=>(
                            <li key={index}>
                                <a className='text-neutral-300 hover:text-neutral-400' href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
