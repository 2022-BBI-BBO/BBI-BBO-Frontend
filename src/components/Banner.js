import '../Banner.css';
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]) 

function Banner(props){
    return(
        <div className='bannerscreen'>
            <Swiper
                className='banner'
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true}}
                autoplay={{delay: 2000}}
                watchOverflow={true}
            >
                {props.banner.map(b => (
                    <SwiperSlide>
                        <img className='banner--image' src={b.img} alt="banner"/>

                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div>
    )
}

export default Banner;