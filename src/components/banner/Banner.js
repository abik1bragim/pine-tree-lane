import React from 'react'
import Tel from "../../images/565.png"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

function Banner() {
    return (
        <div className="ban-swiper">
            <>
                <Swiper
                    spaceBetween={ 30 }
                    centeredSlides={ true }
                    effect={ 'fade' }
                    autoplay={ {
                        delay: 4000,
                        disableOnInteraction: false,
                    } }
                    pagination={ {
                        clickable: true,
                    } }
                    navigation={ true }
                    modules={ [Autoplay, Pagination, Navigation, EffectFade] }
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <h1></h1>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </>

            <div className="to-chat">
                <p>We are availble to chat</p>
            </div>

            <div className="chat">
                <img src={ Tel } alt="" />
                <p>Chat with us</p>
            </div>
        </div>
    )
}

export default Banner