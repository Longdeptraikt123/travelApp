import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import './Navbar.scss'
const Navbar = () => {
    const [toggle, isToggle] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const handleScroll = () => {
        window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className={`navbar ${isScrolled && 'navbar_grey'}`}>
            <div onClick={scrollToTop} className='navbar_logo'>
                <h2>Ｂｏｏｋｉｎｇ</h2>
            </div>
            <div className='navbar_links'>
                <ul>
                    <li className='navbar_link'><a href='#home' >Home</a></li>
                    <li className='navbar_link'><a href='#about'>About us</a></li>
                    <li className='navbar_link'><a href='#offer'>Rooms</a></li>
                    <li className='navbar_link'><a href='#blog'>Blog</a></li>
                    <li className='navbar_link'><a href='#footer'>Contact</a></li>

                </ul>
            </div>

            {/* navbar small screen */}
            <div className='navbar_links_hamburger_small-screen'>
                <GiHamburgerMenu color='#0079FF'
                    fontSize={25}
                    onClick={(e) => {
                        e.preventDefault()
                        isToggle(true)
                    }} />
                {toggle && (
                    <div className='navbar_links_main_small-screen'>
                        <AiOutlineClose className='navbar_links_main_small-screen_close'
                            fontSize={25}
                            onClick={(e) => {
                                e.preventDefault()
                                isToggle(false)
                            }} />
                        <ul className='navbar_links_main_small-screen-ul'>
                            <li className='navbar_link'><a onClick={() => isToggle(false)} href='#home'>Home</a></li>
                            <li className='navbar_link'><a onClick={() => isToggle(false)} href='#about'>About us</a></li>
                            <li className='navbar_link'><a onClick={() => isToggle(false)} href='#offer'>Rooms</a></li>
                            <li className='navbar_link'><a onClick={() => isToggle(false)} href='#blog'>Blog</a></li>
                            <li className='navbar_link'><a onClick={() => isToggle(false)} href='#footer'>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Navbar