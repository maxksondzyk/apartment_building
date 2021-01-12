import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Contacts from "./contacts.component";

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Apartments</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Apartments</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contacts" className="nav-link">Contacts</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/location" className="nav-link">Location</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/construction-progress" className="nav-link">Construction Progress</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
