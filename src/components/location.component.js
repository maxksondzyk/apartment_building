import React, { Component } from 'react';
import "../styles/location.styles.css"

export default class BuildingLocation extends Component {
    render() {
        return (
            <div className="container container-fluid rounded">
                <div className="row rounded">
                    <div className="col-md-7 rounded">
                        <div className="map-responsive rounded">
                            <iframe className="map rounded"
                                // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.3959982758083!2d30.511044915560973!3d50.433724196451294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf6fbd3ff4ff%3A0xa75dee4b07deefcd!2sChicago%2044!5e0!3m2!1sen!2sua!4v1615107703276!5m2!1sen!2sua"}
                                width="600" height="450" allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 aria-valuetext={"Add"}>

                            <small className="text-muted">Antonovycha St, 44</small>
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}
