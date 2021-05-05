import React, { Component } from 'react';

import "bootstrap/js/src/collapse.js";
import "../styles/footer.styles.css"

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer rounded-top">
                <div className="text-center p-3">
                    <h3 className={"text-muted"}>Maksym Ksondzyk</h3>
                </div>

            </footer>
        );
    }
}

