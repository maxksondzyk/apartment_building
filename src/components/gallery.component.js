import React, { Component } from 'react';
import "../styles/gallery.styles.css"
import house2014 from "../images/2014.jpg"
import house2015 from "../images/2015.jpg"
import house2016 from "../images/2016.jpg"
import house2017 from "../images/2017.jpg"
export default class Gallery extends Component {
    render() {
        return (
            <div className="container-fluid">
                <img className="gimg" src={house2014} width={300} alt="Slide 1"/>
                <h3>2014</h3>
                <img className="gimg" src={house2015} width={300} alt="Slide 1"/>
                <h3>2015</h3>
                <img className="gimg" src={house2016} width={300} alt="Slide 1"/>
                <h3>2016</h3>
                <img className="gimg" src={house2017} width={300} alt="Slide 1"/>
                <h3>2017</h3>
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
