import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/js/src/collapse.js";
import "../styles/navbar.styles.css"
export default class Navbar extends Component {

            // <div className="navbar navbar-expand-lg">
            //             <div className="navbar-brand">
            //                 <Link to="/" className="brand">MK-apartments</Link>
            //             </div>
            //             <div className="controls">
            //                              <p className="control">
            //                                  <Link to="/apartments" className="control-link">Apartments</Link>
            //                              </p>
            //                              <p className="control">
            //                                  <Link to="/contacts" className="control-link">Contacts</Link>
            //                              </p>
            //                              <p className="control">
            //                                  <Link to="/about" className="control-link">About</Link>
            //                              </p>
            //                              <p className="control">
            //                                  <Link to="/location" className="control-link">Location</Link>
            //                              </p>
            //                              <p className="control">
            //                                  <Link to="/construction-progress" className="control-link">Construction Progress</Link>
            //                              </p>
            //             </div>
            // </div>

            // <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            //     <Link to="/" className="navbar-brand">Apartments</Link>
            //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            //         <span className="navbar-toggler-icon"/>
            //     </button>
            //
            //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
            //         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            //             <li className="nav-item">
            //                 <Link to="/" className="nav-link">Apartments</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link to="/contacts" className="nav-link">Contacts</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link to="/about" className="nav-link">About</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link to="/location" className="nav-link">Location</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link to="/construction-progress" className="nav-link">Construction Progress</Link>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>

    render() {
        return (
            <nav className="navigation navbar navbar-expand-lg navbar-light bg-light rounded-bottom">
                <a className="navbar-brand" href="/building">Forward</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/building" className="nav-link">Apartments</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacts" className="nav-link">Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/location" className="nav-link">Location</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/construction-progress" className="nav-link">Construction Progress</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
