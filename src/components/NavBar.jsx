import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, animateScroll as scroll } from 'react-scroll'
import Icon from '../../public/icons/icon.svg'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }
    
    return (
        <div className='flex justify-between items-center h-24 w-full mx-auto px-10 shadow-lg bg-[#1d6896] text-white xs:fixed xl:static'>
            <a href='/'>
                <div className='flex flex-row'>
                    <img 
                        src={Icon} 
                        className='h-[40px] w-[40px]'
                    />
                    {/* <h1 className='text-3xl'>joshwu.dev</h1> */}
                </div>
            </a>

            <ul className='hidden md:flex'>
                <Link
                    className='p-4 text-lg cursor-pointer'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link>

                <Link
                    className='p-4 text-lg cursor-pointer'
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Projects</Link>

                <Link
                    className='p-4 text-lg cursor-pointer'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link>

                <a className='p-4 text-lg border' href='https://drive.google.com/file/d/1svi6e7Y2bkKLss2KFIgZzzuLBNNOzeH_/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>Resume</a>
            </ul>

            {/* hamburger menu navbar, only shows on small screens */}
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>

            <ul className={nav ? 'fixed top-24 right-0 w-[75%] h-full overflow-hidden ease-in-out duration-500 border-r-black-900 bg-[#1d6896] md:hidden' : 'ease-in-out duration-500 fixed right-[-100%]'}>
                <Link
                    className='py-7 flex justify-center'
                    onClick={closeNav}
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link>

                <Link
                    className='py-7 flex justify-center'
                    onClick={closeNav}
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Projects</Link>

                <Link
                    className='py-7 flex justify-center'
                    onClick={closeNav}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link>
                
                <div className='w-full flex justify-center'>
                    <a className='py-5 text-center w-1/4 border' href='https://drive.google.com/file/d/1svi6e7Y2bkKLss2KFIgZzzuLBNNOzeH_/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>Resume</a>
                </div>
            </ul>

        </div>
    )
}

export default NavBar