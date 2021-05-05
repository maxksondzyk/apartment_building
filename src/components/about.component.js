import React, { Component } from 'react';
import "../styles/about.styles.css"
export default class About extends Component {
    render() {
        return (
            <>
                <div className={"pageLabel"}>
                    <h1>About us</h1>
                </div>
            <div className="about-container container container-fluid rounded">
                <h5>
                    Modern residents of the metropolis have different lifestyles. Those who want to live in the city center lead an active lifestyle. We believe that housing for proactive citizens is an integral part of their dynamic lives. LCD Forward - close in spirit with its future progressive residents. We create an active way of housing, not exclusively a residential complex. Not only a place of rest and comfort, but also a territory for comprehensive development. Our desire is to build housing that will become a community of like-minded people who are used to living dynamically. In addition, the complex will be equipped with a modern security system and video surveillance.
                </h5>
            </div>
                </>
        );
    }
}
