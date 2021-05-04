import React, { Component } from 'react';
import "../styles/gallery.styles.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
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
            <div className="container-fluid galleryCont">
                <Swiper pagination={{
                    "type": "progressbar"
                }} navigation={true} className="mySwiper">
                    <SwiperSlide>
                        <img className={"gImg"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/05/For_20200520-2.jpg" alt={"May 2020"}/>
                        <label>May 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gImg"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/06/DJI_0295.jpg" alt={"June 2020"}/>
                        <label>June 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gImg"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/08/DJI_0346.jpg" alt={"July 2020"}/>
                        <label>July 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gImg"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/09/DJI_0585.jpg" alt={"August 2020"}/>
                        <label>August 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gImg"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/10/7.jpg" alt={"September 2020"}/>
                        <label>September 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gImg"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/11/DJI_0030.jpg" alt={"October 2020"}/>
                        <label>October 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gImg"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2020/12/DJI_0980.jpg" alt={"November 2020"}/>
                        <label>November 2020</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gImg"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2021/01/DJI_0025.jpg" alt={"December 2020"}/>
                        <label>December 2020</label>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className={"gImg"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2021/02/DJI_0132.jpg" alt={"January 2021"}/>
                        <label>January 2021</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gImg"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2021/03/DJI_0647.jpg" alt={"February 2021"}/>
                        <label>February 2021</label>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"gImg"}
                             src="https://forward.kyiv.ua/wp-content/uploads/2021/04/DJI_0442.jpg" alt={"March 2021"}/>
                        <label>March 2021</label>
                    </SwiperSlide>
                </Swiper>
            </div>
            // <div id="carousel-example-generic" className="carousel slide">
            //     <ol className="carousel-indicators">
            //         <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            //         <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            //         <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            //     </ol>
            //
            //     <div className="carousel-inner">
            //         <div className="item active">

            //             <div className="carousel-caption">
            //                 <h1>Slide 1</h1>
            //                 <p>Slide 1 Description</p>
            //             </div>
            //         </div>
            //
            //         <div className="item">
            //             <img src="http://placehold.it/1200x480" alt="Slide 2"/>
            //             <div className="carousel-caption">
            //                 <h1>Slide 2</h1>
            //                 <p>Slide 2 Description</p>
            //             </div>
            //         </div>
            //
            //         <div className="item">
            //             <img src="http://placehold.it/1200x480" alt="Slide 3"/>
            //             <div className="carousel-caption">
            //                 <h1>Slide 3</h1>
            //                 <p>Slide 3 Description</p>
            //             </div>
            //         </div>
            //     </div>
            //
            //
            //     <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
            //         <span className="icon-prev"></span>
            //     </a>
            //     <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
            //         <span className="icon-next"></span>
            //     </a>
            // </div>
            // <div id="Carousel" className="carousel slide">
            //     <ol className="carousel-indicators">
            //         <li data-target="Carousel" data-slide-to="0" className="active"></li>
            //         <li data-target="Carousel" data-slide-to="1"></li>
            //         <li data-target="Carousel" data-slide-to="2"></li>
            //     </ol>
            //
            //     <div className="carousel-inner">
            //         <div className="item active">
            //             <img src={plan} width={100}/>
            //         </div>
            //         <div className="item">
            //             <img src={house} width={100}/>
            //         </div>
            //     </div>
            //
            //     <a className="left carousel-control" href="#Carousel" data-slide="prev">
            //         <span className="glyphicon glyphicon-chevron-left"></span>
            //     </a>
            //     <a className="right carousel-control" href="#Carousel" data-slide="next">
            //         <span className="glyphicon glyphicon-chevron-right"></span>
            //     </a>
            // </div>

        );
    }

}
