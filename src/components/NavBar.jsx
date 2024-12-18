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
        <div className='flex justify-between items-center h-24 w-full mx-auto px-10 shadow-lg bg-[#15567f] text-white'>
            <a href='/'>
                <div className='flex flex-row'>
                    <img 
                        src={Icon} 
                        className='h-[50px] w-[50px]'
                        alt='User profile icon'
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

                <a className='p-4 text-lg' href='https://docs.google.com/document/d/181rJFq0j1-psu2UMkNRHt8BH6y1ML5p-mI5dh6Retck/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</a>
            </ul>

            {/* hamburger menu navbar, only shows on small screens */}
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>

            <ul className={nav ? 'fixed top-24 right-0 w-[75%] h-full overflow-hidden ease-in-out duration-500 border-r-black-900 bg-[#15567f] md:hidden' : 'ease-in-out duration-500 fixed right-[-100%]'}>
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
                    <a className='py-5 text-center' href='https://docs.google.com/document/d/181rJFq0j1-psu2UMkNRHt8BH6y1ML5p-mI5dh6Retck/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</a>
                </div>
            </ul>

        </div>
    )
}

export default NavBar