import React from 'react'
import './Footer.scss'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_logo'>
                <h2>Travel</h2>
                <div className='footer_icons'>
                    <FaFacebookF className='footer_icon fb' />
                    <FaTwitter className='footer_icon tw' />
                    <FaYoutube className='footer_icon yt' />
                </div>
            </div>
            <div className='footer_links'>
                <h3>Information</h3>
                <a href='#a'>Home</a>
                <a href='#a'>Explore</a>
                <a href='#a'>Special Offers</a>
                <a href='#a'>Blog</a>
            </div>
            <div className='footer_links'>
                <h3>Helpful Links</h3>
                <a href='#a'>Destination</a>
                <a href='#a'>Support</a>
                <a href='#a'>Travel</a>
                <a href='#a'>Privacy</a>
            </div>
            <div style={{ transform: 'translateX(9px)' }} className='footer_links'>
                <h3>Contacts</h3>
                <span>+661 038 933</span>
                <span>travel@gmail.com</span>

            </div>
        </div>
    )
}

export default Footer