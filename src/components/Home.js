import React from 'react'
import './Home.scss'
import Image from '../img/img_1.jpeg'
import { Fade } from "react-awesome-reveal";

const Home = () => {
    const scrollDown = () => {
        window.scrollTo(0, 700)
    }
    return (
        <div
            id='home'
            style={{
                background: `linear-gradient(rgba(33, 33, 33, 0.522), rgba(33, 33, 33, 0.522)), url(${Image})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            className='home'
        >
            <Fade direction='up' triggerOnce={false}>

                <div className='home_container'>

                    <div className='home_title'>
                        <h1>Discover the World, One Journey at a Time.</h1>
                    </div>
                    <div className='home_subTitle'>
                        <p>Life is a collection of moments, and travel is your chance to collect the most extraordinary ones
                            . Start your journey today.
                        </p>
                        <button onClick={scrollDown} className='btn'>Explore Now</button>
                    </div>
                </div>
            </Fade>

            <div className='home_form'>
                <div className='home_form_input'>
                    <label htmlFor='location'>Location</label>
                    <input type='text' placeholder='Destination' />
                </div>

                <div className='home_form_input'>
                    <label htmlFor='distance' >Distance</label>
                    <input type='text' placeholder='10/Meters' />
                </div>

                <div className='home_form_input'>
                    <label htmlFor='location'>Price</label>
                    <input type='text' placeholder='$100-$5000' />
                </div>
                <button className='home_form_btn'>Search</button>
            </div>

        </div>
    )
}

export default Home