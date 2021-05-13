import React, { Component } from 'react';
import "../styles/about.styles.css"
import About from "./about.component";
import BuildingLocation from "./location.component";
import ConstructionProgress from "./construction-progress.component";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Pagination,Navigation
} from 'swiper/core';
SwiperCore.use([Pagination,Navigation]);

export default class Home extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"4em"}}>
                <br/>
                <div className="container gallery-container">
                    <Swiper pagination={{
                        "type": "progressbar"
                    }} navigation={true} className="mySwiper">
                        <SwiperSlide>
                            <img className={"gallery-image"}
                                 src="https://forward.kyiv.ua/wp-content/uploads/2020/12/forward_007-crop.jpg" alt={"May 2020"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={"gallery-image"}
                                 src="https://forward.kyiv.ua/wp-content/uploads/2020/12/forward_008-crop.jpg" alt={"June 2020"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={"gallery-image"}
                                 src="https://forward.kyiv.ua/wp-content/uploads/2020/01/gallery-img-1.jpg" alt={"July 2020"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={"gallery-image"}
                                 src="https://forward.kyiv.ua/wp-content/uploads/2020/01/gallery-img-2.jpg" alt={"August 2020"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={"gallery-image"}
                                 src="https://forward.kyiv.ua/wp-content/uploads/2020/02/img-13.jpg" alt={"September 2020"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={"gallery-image"}
                                 src="https://forward.kyiv.ua/wp-content/uploads/2020/02/img-12.jpg" alt={"October 2020"}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <br/>
                <About/>
                <br/>
                <BuildingLocation/>
                <br/>
                <ConstructionProgress/>
                <br/>
            </div>
        );
    }
}
