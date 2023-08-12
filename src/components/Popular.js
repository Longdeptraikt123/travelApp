import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Image1 from '../img/img_2.jpeg'
import Image2 from '../img/img_3.jpeg'
import Image3 from '../img/img_4.jpeg'
import Image4 from '../img/img_5.jpeg'
import './Popular.scss'
import { Fade } from "react-awesome-reveal";

const Popular = () => {
    const data = [
        {
            id: 1,
            img: Image1,
            descTitle: 'Ejer Bavnehøj',
            destination: 'Denmark'
        },
        {
            id: 2,
            img: Image2,
            descTitle: 'Ben Nevis',
            destination: 'Scotland'
        },
        {
            id: 3,
            img: Image3,
            descTitle: 'Pulteney Bridge',
            destination: 'UK'
        },
        {
            id: 4,
            img: Image4,
            descTitle: 'Ísafjörður',
            destination: 'Iceland'
        },
    ]




    return (
        <div className='popular'>
            <div className='popular_heading'>
                <div className='popular_heading-title'>

                    <Fade direction='left' duration='1000' triggerOnce={false} >

                        <h2>Popular Destinations</h2>
                    </Fade>

                    <Fade direction='left' duration='1200' triggerOnce={false} >

                        <p>Write your own travel story as you traverse captivating landscapes and embrace the extraordinary.</p>
                    </Fade>

                </div>
                <Fade direction='right' duration='1000' triggerOnce={false} >
                    <div className='popular_heading-icons'>

                        <AiOutlineArrowLeft className='popular_heading-icon' />
                        <AiOutlineArrowRight className='popular_heading-icon' />
                    </div>

                </Fade>

            </div>
            <div className='popular_boxes'>
                {data.map((item) => {
                    return (
                        <Fade direction='up' duration='1000' triggerOnce={false} >
                            <div key={item.id} className='popular_box'>
                                <div className='popular_box-image'>
                                    <img src={item.img} alt='' />
                                    <div className='popular_box-textShadow'>
                                        <h3>{item.descTitle}</h3>
                                        <span>{item.destination}</span>
                                    </div>
                                </div>
                                <div className='popular_box-text'>
                                    <h2>0{item.id}</h2>
                                    <span>{item.destination}</span>
                                </div>
                            </div>
                        </Fade>

                    )
                })}
            </div>
        </div>
    )
}

export default Popular