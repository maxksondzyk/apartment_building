import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/js/src/collapse.js";
import "../styles/navbar.styles.css"
export default class Navbar extends Component {

    render() {
        return (
            <nav className="navigation navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/home">FORWARD</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/building" className="nav-link">ВИБІР КВАРТИРИ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/units-list" className="nav-link">УСІ КВАРТИРИ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">ПРО НАС</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/location" className="nav-link">РОЗТАШУВАННЯ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/construction-progress" className="nav-link">ХІД БУДІВНИЦТВА</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
