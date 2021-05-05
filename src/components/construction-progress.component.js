import React, { Component } from 'react';

import Gallery from "./gallery.component";

export default class ConstructionProgress extends Component {
    render() {
        return (
            <>
                <div className={"pageLabel"}>
                    <h1>Construction Progress</h1>
                </div>
            <Gallery/>
                </>
        );
    }
}
