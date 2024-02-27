import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }
    
    return (
        <div className='flex justify-between items-center h-24 w-full mx-auto px-10 shadow-md bg-[#1d6896] text-white'>
            <a href='/'>
                <div className='flex flex-row'>
                    <h1 className=''>joshwu.dev</h1>
                </div>
            </a>

            <ul className='hidden md:flex'>
                <button className='p-4 text-lg'>About</button>
                <button className='p-4 text-lg'>Projects</button>
                <button className='p-4 text-lg'>Contact</button>
                <a className='p-4 text-lg border' href='https://drive.google.com/file/d/1svi6e7Y2bkKLss2KFIgZzzuLBNNOzeH_/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>Resume</a>
            </ul>

            {/* hamburger menu navbar, only shows on small screens */}
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>

            <ul className={nav ? 'fixed top-24 left-0 w-full h-full overflow-hidden ease-in-out duration-500 border-r-black-900 bg-[#1d6896] md:hidden' : 'ease-in-out duration-500 fixed top-[-100%]'}>
                <button className='py-7 text-center w-full'>About</button>
                <button className='py-7 text-center w-full'>Projects</button>
                <button className='py-7 text-center w-full'>Contact</button>
                <div className='w-full flex justify-center'>
                    <a className='py-5 text-center w-1/4 border' href='https://drive.google.com/file/d/1svi6e7Y2bkKLss2KFIgZzzuLBNNOzeH_/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>Resume</a>
                </div>
            </ul>

        </div>
    )
}

export default NavBar