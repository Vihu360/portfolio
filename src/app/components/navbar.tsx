import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800 bg-opacity-15 w-full p-4 sticky top-0 z-50'>

        <div className='flex justify-center gap-10'>

            <button className='hover:underline hover:underline-offset-4'>
                Projects
            </button>

            <button className='hover:underline hover:underline-offset-4'>
                About
            </button>

            <button className='hover:underline hover:underline-offset-4'>
                Contact me 😍
            </button>

            <button className='hover:underline hover:underline-offset-4'>
                Resume
            </button>

        </div>
        
    
        
    </div>
  )
}

export default Navbar