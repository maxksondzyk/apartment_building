import React, { Component } from 'react';
import "../styles/location.styles.css"
import { HiLocationMarker } from 'react-icons/hi'
import { IoMdSubway } from 'react-icons/io'
import { FaCar } from 'react-icons/fa'
export default class BuildingLocation extends Component {
    render() {
        return (
            <>

            <div className="location-container container container-fluid">
                <div className={"pageLabel"} style={{marginLeft: "0.8em"}}>
                    <h1>РОЗТАШУВАННЯ</h1>
                </div>
                <div className="row">
                    <div className="col-md-7 ">
                        <div className="map-responsive">
                            <iframe className="map "
                                src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2761.9966021709834!2d30.481560462985122!3d50.454160707637676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21eb32889e35a54!2z0JbQmiBGb3J3YXJk!5e0!3m2!1sen!2sua!4v1620167213792!5m2!1sen!2sua"}
                                width="600" height="450" allowFullScreen
                                title={"Location"}>
                            </iframe>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h3 className={"h3-address"}>
                            <HiLocationMarker/> Маршала Рибалка, 5Б
                        </h3>
                        <hr className="solid"/>
                        <h4 className={"text-muted"}>
                            <IoMdSubway/> Лук'янівська
                        </h4>
                        <h4 className={"text-muted"}>
                            <IoMdSubway/> Політехнічний Інститут
                        </h4>
                        <h4 className={"text-muted"}>
                            <FaCar/> 15хв до центру міста
                        </h4>
                    </div>
                </div>
            </div>
                </>
        );
    }
}
