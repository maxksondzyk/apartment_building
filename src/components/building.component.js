import React from 'react';

import "../styles/building.styles.css"
import {Link} from "react-router-dom";
import axios from "axios";

class Building extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(`http://localhost:${process.env.PORT || 5000}/units/`)
            .then(response => {
                this.setState({ units: response.data })
            })
            .catch((error) => {
                console.log(error);
            })

    }

    getUnits(floor){
        return this.state.units.filter(currentUnit =>
            currentUnit.floor === floor && currentUnit.availability === true
        )
    }

    render() {
        return(
            <div className={"building-main-container"}>
                <div className={"pageLabel"} style={{marginLeft: "4%"}}>
                    <h1>ОБЕРІТЬ ПОВЕРХ</h1>
                </div>
            <div className={"building-container"}>
                <img className="building-plan-img " src={"https://i.ibb.co/KsgvPHt/building.png"} alt={"Building plan"}/>
                <svg viewBox="-19 0 370 280" className={"building-svg"}>
                    <g transform="scale(0.292)">
                        {this.state && this.getUnits(2).length ?
                            <Link to={
                                {
                                    pathname: '/units',
                                    state: this.state ? this.getUnits(2) : null
                                }
                            }>
                                <path
                                    d="m46.28 696.57 199.58 29.09 796.10 -62.27 0.35 -48.47L247.84 660.74 46.44 639.80Z"
                                    data-code="floor2"
                                    className="floor"
                                />
                                <text x="14" y="685" fontSize={35} fill="black">2</text>
                            </Link>
                            : <path
                                d="m46.28 696.57 199.58 29.09 796.10 -62.27 0.35 -48.47L247.84 660.74 46.44 639.80Z"
                                data-code="floor2"
                                className="floor_taken"
                            />
                        }

                        {this.state && this.getUnits(3).length ?
                            <Link to={
                                {
                                    pathname: '/units',
                                    state: this.state ? this.getUnits(3) : null
                                }
                            }>
                                <path
                                    d="m46.44 639.80 201.40 20.93 794.47 -45.82 -0.03 -46.06 -794.97 25.81 -201.19 -10.61z"
                                    data-code="floor3"
                                    className="floor"
                                />
                                <text x="14" y="625" fontSize={35} fill="black">3</text>
                            </Link>
                            : <path
                                d="m46.44 639.80 201.40 20.93 794.47 -45.82 -0.03 -46.06 -794.97 25.81 -201.19 -10.61z"
                                data-code="floor3"
                                className="floor_taken"
                            />
                        }

                        {this.state && this.getUnits(4).length ?
                            <Link to={
                                {
                                    pathname: '/units',
                                    state: this.state ? this.getUnits(4) : null
                                }
                            }>
                                <path
                                    d="m46.12 584.06 201.19 10.61 794.97 -25.81 -0.05 -49.23 -793.77 8.00 -202.63 -5.55z"
                                    data-code="floor4"
                                    className="floor"
                                />
                                <text x="14" y="565" fontSize={35} fill="black">4</text>
                            </Link>
                            :  <path
                                d="m46.12 584.06 201.19 10.61 794.97 -25.81 -0.05 -49.23 -793.77 8.00 -202.63 -5.55z"
                                data-code="floor4"
                                className="floor_taken"
                            />
                        }

                        {this.state && this.getUnits(5).length ?
                            <Link to={
                                {
                                    pathname: '/units',
                                    state: this.state ? this.getUnits(5) : null
                                }
                            }>
                                <path
                                    d="m45.83 522.08 201.91 6.52 794.49 -8.96 -0.05 -48.47 -794.97 -11.04 -201.43 2.35z"
                                    data-code="floor5"
                                    className="floor"
                                />
                                <text x="14" y="505" fontSize={35} fill="black">5</text>
                            </Link>
                            : <path
                                d="m45.83 522.08 201.91 6.52 794.49 -8.96 -0.05 -48.47 -794.97 -11.04 -201.43 2.35z"
                                data-code="floor5"
                                className="floor_taken"
                            />
                        }

                        {this.state && this.getUnits(6).length ?
                            <Link to={
                                {
                                    pathname: '/units',
                                    state: this.state ? this.getUnits(6) : null
                                }
                            }>
                                <path
                                    d="m45.78 462.48 202.59 -1.99 793.81 10.68 -0.22 -49.06 -794.63 -29.33 -200.92 13.50z"
                                    data-code="floor6"
                                    className="floor"
                                />
                                <text x="14" y="445" fontSize={35} fill="black">6</text>
                            </Link>
                            : <path
                                d="m45.78 462.48 202.59 -1.99 793.81 10.68 -0.22 -49.06 -794.63 -29.33 -200.92 13.50z"
                                data-code="floor6"
                                className="floor_taken"
                            />
                        }

                        {this.state && this.getUnits(7).length ?
                            <Link to={
                                {
                                    pathname: '/units',
                                    state: this.state ? this.getUnits(7) : null
                                }
                            }>
                                <path
                                    d="m46.41 406.28 200.92 -13.50 794.63 29.33 0.63 -49.06 -794.63 -47.37 -200.92 22.34z"
                                    data-code="floor7"
                                    className="floor"
                                />
                                <text x="14" y="385" fontSize={35} fill="black">7</text>
                            </Link>
                            : <path
                                d="m46.41 406.28 200.92 -13.50 794.63 29.33 0.63 -49.06 -794.63 -47.37 -200.92 22.34z"
                                data-code="floor7"
                                className="floor_taken"
                            />
                        }
                        {this.state && this.getUnits(8).length ?
                            <Link to={
                                {
                                    pathname: '/units',
                                    state: this.state ? this.getUnits(8) : null
                                }
                            }>
                                <path
                                    d="m47.03 348.03 200.92 -22.34 794.63 47.37 0.29 -50.42 -795.57 -65.12 -200.66 30.91z"
                                    data-code="floor8"
                                    className="floor"
                                />
                                <text x="14" y="325" fontSize={35} fill="black">8</text>
                            </Link>
                            : <path
                                d="m47.03 348.03 200.92 -22.34 794.63 47.37 0.29 -50.42 -795.57 -65.12 -200.66 30.91z"
                                data-code="floor8"
                                className="floor_taken"
                            />
                        }

                        {this.state && this.getUnits(9).length ?
                            <Link to={
                                {
                                    pathname: '/units',
                                    state: this.state ? this.getUnits(9) : null
                                }
                            }>
                                <path
                                    d="m46.64 288.43 200.66 -30.91 795.57 65.12 -0.65 -48.20 -795.57 -85.09 -200.66 38.13z"
                                    data-code="floor9"
                                    className="floor"
                                />
                                <text x="14" y="265" fontSize={35} fill="black">9</text>
                            </Link>
                            :  <path
                                d="m46.64 288.43 200.66 -30.91 795.57 65.12 -0.65 -48.20 -795.57 -85.09 -200.66 38.13z"
                                data-code="floor9"
                                className="floor_taken"
                            />
                        }

                        {this.state && this.getUnits(10).length ?
                            <Link to={
                                {
                                    pathname: '/units',
                                    state: this.state ? this.getUnits(10) : null
                                }
                            }>
                                <path
                                    d="m45.99 227.48 200.66 -38.13 795.57 85.09 -0.65 -52.52L246.00 121.18 47.05 167.14Z"
                                    data-code="floor10"
                                    className="floor"
                                />
                                <text x="-5" y="205" fontSize={35} fill="black">10</text>
                            </Link>
                            : <path
                                d="m45.99 227.48 200.66 -38.13 795.57 85.09 -0.65 -52.52L246.00 121.18 47.05 167.14Z"
                                data-code="floor10"
                                className="floor_taken"
                            />
                        }

                        {this.state && this.getUnits(1).length ?
                            <Link to={
                                {
                                    pathname: '/units',
                                    state: this.state ? this.getUnits(1) : null
                                }
                            }>
                                <path
                                    d="m46.34 761.31 200.26 39.75 795.42 -85.00 -0.06 -52.67 -796.10 62.27 -199.58 -29.09z"
                                    data-code="floor1"
                                    className="floor"
                                />
                                <text x="14" y="745" fontSize={35} fill="black">1</text>
                            </Link>
                            : <path
                                d="m46.34 761.31 200.26 39.75 795.42 -85.00 -0.06 -52.67 -796.10 62.27 -199.58 -29.09z"
                                data-code="floor1"
                                className="floor_taken"
                            />
                        }
                    </g>
                </svg>
            </div>
                </div>
        )
    }
}

export default Building;
