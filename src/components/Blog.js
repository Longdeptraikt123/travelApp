import React from 'react'
import './Blog.scss'
import Image1 from '../img/img_13.jpeg'
import Image2 from '../img/img_14.jpeg'
import Image3 from '../img/img_15.jpeg'
import Image4 from '../img/img_16.jpeg'
import { BiRightArrowAlt } from 'react-icons/bi';
import { Fade } from "react-awesome-reveal";

const Blog = () => {
    const data = [
        {
            title: 'Beautiful Tunisia, let us travel',
            id: 1,
            img: Image1,
            desc: "From the golden sands of its Mediterranean coastline to the timeless charm of its ancient cities, Tunisia's beauty is a symphony of colors, flavors, and history.",

        },
        {
            title: 'Romantic moments in Japan',
            id: 2,
            img: Image2,
            desc: "Blossoms paint the landscapes in delicate hues during cherry blossom season, and ancient castles stand as testaments to its rich history.",

        }
        ,
        {
            title: 'Let us have an adventure outside Finland',
            id: 3,
            img: Image3,
            desc: " From the ethereal dance of the Northern Lights in the Arctic skies to the serenity of its thousand lakes reflecting the midnight sun, Finland paints a masterpiece of nature's wonders.",

        },
        {
            title: 'Exploring the Allure of Vietnam',
            id: 4,
            img: Image4,
            desc: "Vietnam, a mesmerizing blend of ancient traditions and breathtaking landscapes, invites you to explore its captivating beauty.",

        }
    ];

    return (
        <div className='blog'>
            <div className='blog_heading'>
                <Fade direction='up' duration='1000' triggerOnce={false} >

                    <h2>Our Blogs!</h2>
                    <span>An insight to the incredible experience in the world</span>
                </Fade>

            </div>
            <div className='blog_boxes'>
                {
                    data.map(item => {
                        return (
                            <Fade direction='up' duration='1000' triggerOnce={false} >
                                <div key={item.id} className='blog_box'>
                                    <div className='blog_box-img'>
                                        <img src={item.img} alt='' />
                                    </div>
                                    <div className='blog_box-text'>
                                        <h3>{item.title}</h3>
                                        <span>{item.desc}</span>
                                        <button>Read more <BiRightArrowAlt style={{ fontSize: '22', fontWeight: '600' }} className='blog_box-icon' /></button>
                                    </div>
                                </div>
                            </Fade>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog