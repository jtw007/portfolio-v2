import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    
    return (
        <div className='flex justify-between items-center w-full mx-auto px-10 border-8 border-sky-500'>
            <a href='/'>
                <div className=''>
                    <h1>joshwu.dev</h1>
                </div>
            </a>

            <ul className=''>
                <li className=''>About</li>
                <li className=''>Projects</li>
                <li className=''>Contact</li>
                <button className=''>Resume</button>
            </ul>

        </div>
    )
}

export default NavBar