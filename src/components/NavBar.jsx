import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    
    return (
        <div className=''>
            <a href='/'>
                <div className=''>
                    <h1>joshwu.dev</h1>
                </div>
            </a>

            <ul className=''>
                <li className=''>one</li>
                <li className=''>two</li>
                <li className=''>three</li>
            </ul>
        </div>
    )
}

export default NavBar