import React, { Component } from 'react';
import "../styles/location.styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class BuildingLocation extends Component {
    render() {
        return (
            <div className="container container-fluid rounded">
                <div className="row rounded">
                    <div className="col-md-7 rounded">
                        <div className="map-responsive rounded">
                            <iframe className="map rounded"
                                src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2761.9966021709834!2d30.481560462985122!3d50.454160707637676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21eb32889e35a54!2z0JbQmiBGb3J3YXJk!5e0!3m2!1sen!2sua!4v1620167213792!5m2!1sen!2sua"}
                                width="600" height="450" allowFullScreen
                                title={"Location"}>
                            </iframe>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>
                            <FontAwesomeIcon icon = {["fas","map-marker-alt"]}/> Marshala Rybalka St, 5Б
                        </h3>
                        <hr className="solid"/>
                        <h4 className={"text-muted"}>
                            <FontAwesomeIcon icon = {["fas","subway"]}/> Lukianivska
                        </h4>
                        <h4 className={"text-muted"}>
                            <FontAwesomeIcon icon = {["fas","subway"]}/> Politekhnichnyi Instytut
                        </h4>
                        <h4 className={"text-muted"}>
                            <FontAwesomeIcon icon = {["fas","car"]}/> 15 min to city center
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}
