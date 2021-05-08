import React from 'react';

import "../styles/plan.styles.css"
import { Link } from 'react-router-dom';

class Plan extends React.Component {
    constructor(props) {
        super(props);
        if(props.location.state){
            this.state = { apartments: props.location.state};
        }

    }
    getApartment(planning){
        let apt;
        this.state.apartments.forEach(apartment => {
            if(apartment.planning === planning) {
                apt = apartment
                // return apartment;
            }
        })
        return apt;
        // return (this.state.apartments.filter(currentApartment =>
        //     currentApartment.planning === planning
        // ))
    }
    render() {
        console.log(this.state.apartments)
        return (
            <div>
                <div className={"floorNum"}>
                    <h1>Floor {this.state.apartments[0].floor}</h1>
                </div>
                <div className="cont">
                    <img className="planImg" src={"https://i.ibb.co/gmbcd2Q/Main-plan1.png"} alt={"Apartments plan"}/>
                    <svg viewBox="0 50 900 400" className={"planSvg"}>

                        <g transform="scale(0.16)">
                            {this.getApartment("apt22") ?
                                <Link to={
                                    {
                                        pathname: '/apartment',
                                        state: this.getApartment("apt22"),
                                    }
                                }>
                                    <path
                                        d="m587.75 2380.85 -0.65 -873.78 997.33 -0.85v0.00 445.88l163.65 0.62 0.31 427.47z"
                                        data-code="apt22"
                                        className="apt"/>
                                </Link>
                                :  <path
                                    d="m587.75 2380.85 -0.65 -873.78 997.33 -0.85v0.00 445.88l163.65 0.62 0.31 427.47z"
                                    data-code="apt22"
                                    className="apt-taken"/>
                            }
                            {this.getApartment("apt23") ?
                            <Link to={
                                {
                                    pathname: '/apartment',
                                    state: this.getApartment("apt23"),
                                }
                            }>
                                <path
                                    d="m1816.74 607.25 1321.52 0.20 0.20 1066.01 -924.48 0.19 -0.08 -908.79 -396.95 -0.15z"
                                    data-code="apt23"
                                    className="apt"/>
                            </Link>
                                : <path
                                    d="m1816.74 607.25 1321.52 0.20 0.20 1066.01 -924.48 0.19 -0.08 -908.79 -396.95 -0.15z"
                                    data-code="apt23"
                                    className="apt-taken"/>
                            }
                            {this.getApartment("apt24") ?
                            <Link to={
                                {
                                    pathname: '/apartment',
                                    state: this.getApartment("apt24"),
                                }
                            }>
                                <path d="m3164.73 1673.24 0.43 -1065.17 868.49 -0.31 -0.31 1066.35z"
                                      data-code="apt24"
                                      className="apt"/>
                            </Link>
                                : <path d="m3164.73 1673.24 0.43 -1065.17 868.49 -0.31 -0.31 1066.35z"
                                        data-code="apt24"
                                        className="apt-taken"/>
                            }
                            {this.getApartment("apt21") ?
                            <Link to={
                                {
                                    pathname: '/apartment',
                                    state: this.getApartment("apt21"),
                                }
                            }>
                                <path
                                    d="m587.75 1480.81 -0.22 -873.23 1203.17 0.44v0.00 913.55l-179.79 -0.44 -0.22 -41.41z"
                                    data-code="apt21"
                                    className="apt"/>
                            </Link>
                                : <path
                                    d="m587.75 1480.81 -0.22 -873.23 1203.17 0.44v0.00 913.55l-179.79 -0.44 -0.22 -41.41z"
                                    data-code="apt21"
                                    className="apt-taken"/>
                            }
                            {this.getApartment("apt26") ?
                            <Link to={
                                {
                                    pathname: '/apartment',
                                    state: this.getApartment("apt26"),
                                }
                            }>
                                <path
                                    d="m2187.57 2380.96 -0.02 -428.55 2349.08 0.01 0.77 456.44h-478.63 0.00l-0.31 -34.21 -16.95 0.31 -0.15 5.70z"
                                    data-code="apt26"
                                    className="apt"/>
                            </Link>
                                : <path
                                    d="m2187.57 2380.96 -0.02 -428.55 2349.08 0.01 0.77 456.44h-478.63 0.00l-0.31 -34.21 -16.95 0.31 -0.15 5.70z"
                                    data-code="apt26"
                                    className="apt-taken"/>
                            }
                            {this.getApartment("apt25") ?
                            <Link to={
                                {
                                    pathname: '/apartment',
                                    state: this.getApartment("apt25"),
                                }
                            }>
                                <path
                                    d="m4059.32 1673.46 -0.22 -1119.71 1111.21 0.65 0.87 400.55 -380.06 0.87v0.00 400.77l-228.14 1.16 -0.03 315.71z"
                                    data-code="apt25"
                                    className="apt"/>
                            </Link>
                                : <path
                                    d="m4059.32 1673.46 -0.22 -1119.71 1111.21 0.65 0.87 400.55 -380.06 0.87v0.00 400.77l-228.14 1.16 -0.03 315.71z"
                                    data-code="apt25"
                                    className="apt-taken"/>

                            }
                            {this.getApartment("storage") ?
                                <Link to={
                                    {
                                        pathname: '/apartment',
                                        state: this.getApartment("storage"),
                                    }
                                }>
                                    <path d="m5173.84 1567.09 -360.14 0.79 0.23 -589.04 360.48 -0.23z"
                                          data-code="storage"
                                          className="apt"/>
                                </Link>
                                : <path d="m5173.84 1567.09 -360.14 0.79 0.23 -589.04 360.48 -0.23z"
                                        data-code="storage"
                                        className="apt-taken"/>
                            }
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Plan;
