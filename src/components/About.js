import React from 'react'
import './About.scss'
import Image1 from '../img/img_9.jpg'
import Image2 from '../img/img_10.jpg'
import Image3 from '../img/img_11.jpg'
import Image4 from '../img/img_12.jpeg'
import { Fade } from "react-awesome-reveal";

const About = () => {
    const data = [
        {
            title: '120+ Partners',
            img: Image1,
            desc: 'Preserving the natural beauty of our surroundings is at the heart of our ethos. We are committed to sustainable practices that protect the environment'
        },
        {
            title: '1100+ Hotels and Resorts',
            img: Image2,
            desc: 'Preserving the natural beauty of our surroundings is at the heart of our ethos. We are committed to sustainable practices that protect the environment'
        },
        {
            title: '10000+ Customers',
            img: Image3,
            desc: 'Preserving the natural beauty of our surroundings is at the heart of our ethos. We are committed to sustainable practices that protect the environment'
        },

    ]
    return (
        <div className='about'>
            <div className='about_heading'>
                <Fade direction='down' duration='1000' triggerOnce={false} >
                    <h2>Why choose us?</h2>
                </Fade>

            </div>
            <div className='about_content'>
                {data.map(item => (

                    <Fade direction='up' duration='1000' triggerOnce={false} >

                        <div className='about_content-box'>
                            <div className='about_content-img'>
                                <img src={item.img} alt='' />
                            </div>
                            <div className='about_content-text'>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </Fade>

                ))}
            </div>
            <Fade direction='right' duration='1000' triggerOnce={false} >

                <div className='about_card'>
                    <div style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.609)), url(${Image4})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',

                    }}
                        className='about_card-content'>
                        <div className='about_card-text'>
                            <h2>Wonderful house experience in there</h2>
                            <p>Discover a world of tranquility and elegance at our resort, where the fusion of
                                luxury and nature creates an unparalleled experience.
                                Your journey to relaxation and adventure begins here.</p>
                        </div>
                        <div className='about_card-video'>
                            <iframe width="600" height="300" src="https://www.youtube.com/embed/WhQapHmaYYE"
                                title="JOURNEY TO VIETNAM | A Cinematic Travel Video" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                             picture-in-picture; web-share"
                                allowFullScreen
                                autoPlay
                                loop
                                muted>
                            </iframe>
                        </div>
                    </div>
                </div>
            </Fade>

        </div >
    )
}

export default About