import React, { Component } from 'react';

import "bootstrap/js/src/collapse.js";
import "../styles/footer.styles.css"
import Contacts from "./contacts.component";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Contacts/>
            </footer>
        );
    }
}

