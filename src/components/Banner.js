import '../Banner.css';
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, A11y} from "swiper";
import React from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

SwiperCore.use([Pagination, Autoplay]) 

function Banner({banner}){
    console.log(banner);
    return(
        // <div className='bannerscreen'>
        //     <Swiper
        //         className='banner'
        //         modules={[Pagination, A11y]}
        //         loop={true}
        //         spaceBetween={50}
        //         slidesPerView={1}
        //         pagination={{clickable: true}}
        //         autoplay={{delay: 2000}}
        //         watchOverflow={true}
        //     >
        //         {banner.map(b => (
        //             <SwiperSlide>
        //                 <img className='banner--image' src={b.img} alt="banner"/>
        //             </SwiperSlide>
        //         ))
        //         }
        //     </Swiper>
        // </div>
        <div className='bannerscreen'>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false}>
            {banner.map(b => (
                    
                         <img className='banner--image' src={b.img} alt="banner"/>
                     
                 ))
            }
            </Carousel>
        </div>
    )
}

export default Banner;