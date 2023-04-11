import React from 'react'
import './Bestsellers.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";

function Bestsellers() {
    return (
        <div className='Bestsellers'>
            <h1>Our Bestsellers</h1>
            <>
                <Swiper
                    slidesPerView={ 4 }
                    spaceBetween={ 30 }
                    autoplay={ {
                        delay: 4000,
                        disableOnInteraction: false,
                    } }
                    // centeredSlides={ true }
                    pagination={ {
                        clickable: true,
                    } }
                    navigation={ true }
                    modules={ [Pagination, Navigation, Autoplay] }
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="best-img">
                            <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/craftedkitchenf_350x.jpg?v=1618289935" alt="" />
                        </div>

                        <p className='p'>JASMINE CHIC</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="best-img">
                            <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/craftedkitchen2_350x.jpg?v=1618289936" alt="" />
                        </div>

                        <p className='p'>WHITE LOTUS CHIC</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="best-img">
                            <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/Scandikitchen1_350x.jpg?v=1618289937" alt="" />
                        </div>

                        <p className='p'>SCANDI WATER CRESS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="best-img">
                            <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/Classickitchen1_350x.jpg?v=1618289938" alt="" />
                        </div>

                        <p className='p'>BLUESTAR CLASSIC</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="best-img">
                            <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/contemporarycollection4_350x.jpg?v=1618289931" alt="" />
                        </div>

                        <p className='p'>JASMIN CHIC</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="best-img">
                            <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/contemporarycollection4_350x.jpg?v=1618289931" alt="" />
                        </div>

                        <p className='p'>DAIYS CONTEMPORARY</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="best-img">
                            <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/kitchenclassic2_350x.jpg?v=1618289932" alt="" />
                        </div>

                        <p className='p'>IRIS CLASSIC</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="best-img">
                            <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/classic1_350x.jpg?v=1618289933" alt="" />
                        </div>

                        <p className='p'>ORCHID CLASSIC</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="best-img">
                            <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/Scandikitchen1_350x.jpg?v=1618289937" alt="" />
                        </div>

                        <p className='p'>SCANDI WATER CRESS</p>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    )
}

export default Bestsellers