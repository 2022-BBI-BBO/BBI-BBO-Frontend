import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {Link} from "react-router-dom";

SwiperCore.use([Pagination, Autoplay, EffectFade])

export default function Banner(props) {
    return (
        <div className='bannerscreen'>
            <Swiper
                className='banner'
                loop={true}
                effect={"fade"}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true}}
                autoplay={{delay: 2000}}
                watchOverflow={true}
            >
            {props.banner.map(b => (
                <SwiperSlide>
                    <img className='banner--img' src={b.img} alt="banner"/>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}