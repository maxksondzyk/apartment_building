import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
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
                            <Link to="/home#about" className="nav-link">ПРО НАС</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/home#location" className="nav-link">РОЗТАШУВАННЯ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/home#construction-progress" className="nav-link">ХІД БУДІВНИЦТВА</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/home#contacts" className="nav-link">КОНТАКТИ</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
