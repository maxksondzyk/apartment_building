import React, { Component } from 'react';
import "../styles/about.styles.css"
import About from "./about.component";
import BuildingLocation from "./location.component";
import ConstructionProgress from "./construction-progress.component";
import Contacts from "./contacts.component";
export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <p><a name="about"/></p>
                <About/>
                {/*<br/>*/}
                <br/>
                <BuildingLocation/>
                <br/>
                {/*<br/>*/}
                <ConstructionProgress/>
                <br/>
            </div>
        );
    }
}
