import React from 'react';

import "../styles/building.styles.css"
import {Link} from "react-router-dom";

class Building extends React.Component {
    render() {
        return(
            <div className={"cont"}>
                <img className="bplanImg" src={"https://i.ibb.co/KsgvPHt/building.png"} alt={"Building plan"}/>
                <svg viewBox="-30 0 370 700">
                    <g transform="scale(0.3)">
                        <Link to={
                            {
                                pathname: '/apartments',
                                state:"2"
                            }
                        }>
                        <path d="m46.28 696.57 199.58 29.09 796.10 -62.27 0.35 -48.47L247.84 660.74 46.44 639.80Z"
                              data-code="floor2"
                              className="floor"
                              />
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartments',
                                state:"3"
                            }
                        }>
                        <path d="m46.44 639.80 201.40 20.93 794.47 -45.82 -0.03 -46.06 -794.97 25.81 -201.19 -10.61z"
                              data-code="floor3"
                              className="floor"
                              />
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartments',
                                state:"4"
                            }
                        }>
                        <path d="m46.12 584.06 201.19 10.61 794.97 -25.81 -0.05 -49.23 -793.77 8.00 -202.63 -5.55z"
                              data-code="floor4"
                              className="floor"
                              />
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartments',
                                state:"5"
                            }
                        }>
                        <path d="m45.83 522.08 201.91 6.52 794.49 -8.96 -0.05 -48.47 -794.97 -11.04 -201.43 2.35z"
                              data-code="floor5"
                              className="floor"
                              />
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartments',
                                state:"6"
                            }
                        }>
                        <path d="m45.78 462.48 202.59 -1.99 793.81 10.68 -0.22 -49.06 -794.63 -29.33 -200.92 13.50z"
                              data-code="floor6"
                              className="floor"
                              />
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartments',
                                state:"7"
                            }
                        }>
                        <path d="m46.41 406.28 200.92 -13.50 794.63 29.33 0.63 -49.06 -794.63 -47.37 -200.92 22.34z"
                              data-code="floor7"
                              className="floor"
                              />
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartments',
                                state:"8"
                            }
                        }>
                        <path d="m47.03 348.03 200.92 -22.34 794.63 47.37 0.29 -50.42 -795.57 -65.12 -200.66 30.91z"
                              data-code="floor8"
                              className="floor"
                              />
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartments',
                                state:"9"
                            }
                        }>
                        <path d="m46.64 288.43 200.66 -30.91 795.57 65.12 -0.65 -48.20 -795.57 -85.09 -200.66 38.13z"
                              data-code="floor9"
                              className="floor"
                              />
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartments',
                                state:"10"
                            }
                        }>
                        <path d="m45.99 227.48 200.66 -38.13 795.57 85.09 -0.65 -52.52L246.00 121.18 47.05 167.14Z"
                              data-code="floor10"
                              className="floor"
                              />
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartments',
                                state:"1"
                            }
                        }>
                        <path d="m46.34 761.31 200.26 39.75 795.42 -85.00 -0.06 -52.67 -796.10 62.27 -199.58 -29.09z"
                              data-code="floor1"
                              className="floor"
                              />
                        </Link>
                    </g>
                </svg>
            </div>
        )
    }
}

export default Building;
