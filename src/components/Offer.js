import './Offer.scss'
import React from 'react'
import Image1 from '../img/img_6.jpeg'
import Image2 from '../img/img_7.jpeg'
import Image3 from '../img/img_8.jpeg'
import { FaBed, FaBath } from 'react-icons/fa';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsBicycle } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { Fade } from "react-awesome-reveal";


const Offer = () => {
    const data = [
        {
            id: 1,
            price: '$5,000',
            destination: '200 Bolt Road, Copenhagen, Denmark',
            img: Image1,
            sale: '30%'
        },
        {
            id: 2,
            price: '$2,000',
            destination: '12 Oxford Road, London, Britain',
            img: Image2,
            sale: '10%'

        },
        {
            id: 3,
            price: '$1,500',
            destination: '126 Diana Lane, Edinburgh, Scotland',
            img: Image3,
            sale: '20%'

        }
    ]
    return (
        <div className='offer'>
            <div className='offer_heading'>
                <Fade direction='down' triggerOnce={false}>
                    <h2>Special Offers</h2>
                </Fade>
                <Fade direction='up' triggerOnce={false}>
                    <p>Experience a world where palm-fringed beaches, azure waters
                        , and luxurious accommodations blend seamlessly, promising an unforgettable retreat.
                    </p>

                </Fade>

            </div>
            <div className='offer_boxes'>
                {data.map(item => {
                    return (
                        <Fade direction='up' duration='1000' triggerOnce={false} >
                            <div className='offer_box'>

                                <div className='offer_box-img'>
                                    <img src={item.img} alt='' />
                                    <span>{item.sale}</span>
                                </div>
                                <div className='offer_box-content'>
                                    <div className='offer_box-price'>
                                        <p>{item.price}</p>
                                        <span>For rent</span>
                                    </div>
                                    <div className='offer_box-icons'>
                                        <div className='offer_box-icon'>
                                            <FaBed style={{ color: '#61677A' }} />
                                            <span>2 beds</span>
                                        </div>
                                        <div className='offer_box-icon'>
                                            <FaBath style={{ color: '#61677A' }} />
                                            <span>1 bath</span>
                                        </div>
                                        <div className='offer_box-icon'>
                                            <AiOutlineWifi style={{ color: '#61677A' }} />
                                            <span>Wi-fi</span>
                                        </div>
                                        <div className='offer_box-icon'>
                                            <BsBicycle style={{ color: '#61677A' }} />
                                            <span>2 bikes</span>
                                        </div>
                                    </div>
                                    <div className='offer_box-detail'>
                                        <div className='offer_box-text'>
                                            <ImLocation />
                                            <p>{item.destination}</p>
                                        </div>
                                        <button className='btn'>View Detail</button>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    )
                })}
            </div>

        </div>
    )
}

export default Offer