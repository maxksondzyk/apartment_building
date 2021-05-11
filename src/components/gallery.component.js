import React, { Component } from 'react';
import "../styles/gallery.styles.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Pagination,Navigation
} from 'swiper/core';
SwiperCore.use([Pagination,Navigation]);
export default class Gallery extends Component {
    render() {
        return (
            <div className="container-fluid gallery-container">
                <Swiper pagination={{
                    "type": "progressbar"
                }} navigation={true} className="mySwiper">
                    <SwiperSlide>
                        <img className={"gallery-image"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/05/For_20200520-2.jpg" alt={"May 2020"}/>
                        <label className={"gallery-image-label"}>May 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gallery-image"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/06/DJI_0295.jpg" alt={"June 2020"}/>
                        <label className={"gallery-image-label"}>June 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gallery-image"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/08/DJI_0346.jpg" alt={"July 2020"}/>
                        <label className={"gallery-image-label"}>July 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gallery-image"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/09/DJI_0585.jpg" alt={"August 2020"}/>
                        <label className={"gallery-image-label"}>August 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gallery-image"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/10/7.jpg" alt={"September 2020"}/>
                        <label className={"gallery-image-label"}>September 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gallery-image"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/11/DJI_0030.jpg" alt={"October 2020"}/>
                        <label className={"gallery-image-label"}>October 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gallery-image"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/12/DJI_0980.jpg" alt={"November 2020"}/>
                        <label className={"gallery-image-label"}>November 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gallery-image"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2021/01/DJI_0025.jpg" alt={"December 2020"}/>
                        <label className={"gallery-image-label"}>December 2020</label>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className={"gallery-image"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2021/02/DJI_0132.jpg" alt={"January 2021"}/>
                        <label className={"gallery-image-label"}>January 2021</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gallery-image"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2021/03/DJI_0647.jpg" alt={"February 2021"}/>
                        <label className={"gallery-image-label"}>February 2021</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gallery-image"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2021/04/DJI_0442.jpg" alt={"March 2021"}/>
                        <label className={"gallery-image-label"}>March 2021</label>
                    </SwiperSlide>
                </Swiper>
            </div>
        );
    }

}
