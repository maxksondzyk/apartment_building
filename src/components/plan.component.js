import React from 'react';

import "../styles/plan.styles.css"
import { Link } from 'react-router-dom';

class Plan extends React.Component {
    constructor(props) {
        super(props);
        if(props.location.state){
            this.state = { units: props.location.state};
        }

    }
    getUnit(planning){
        let result;
        this.state.units.forEach(unit => {
            if(unit.planning === planning) {
                result = unit
            }
        })
        return result;
       
    }
    render() {
        console.log(this.state.units)
        return (
            <div>
                <div className={"floor-number"}>
                    <h1>Floor {this.state.units[0].floor}</h1>
                </div>
                <div className="plan-container">
                    <img className="plan-image" src={"https://i.ibb.co/gmbcd2Q/Main-plan1.png"} alt={"Floor plan"}/>
                    <svg viewBox="0 50 900 400" className={"plan-svg"}>

                        <g transform="scale(0.16)">
                            {this.getUnit("apt22") ?
                                <Link to={
                                    {
                                        pathname: '/unit',
                                        state: this.getUnit("apt22"),
                                    }
                                }>
                                    <path
                                        d="m587.75 2380.85 -0.65 -873.78 997.33 -0.85v0.00 445.88l163.65 0.62 0.31 427.47z"
                                        data-code="apt22"
                                        className="unit"/>
                                </Link>
                                :  <path
                                    d="m587.75 2380.85 -0.65 -873.78 997.33 -0.85v0.00 445.88l163.65 0.62 0.31 427.47z"
                                    data-code="apt22"
                                    className="unit-taken"/>
                            }
                            {this.getUnit("apt23") ?
                            <Link to={
                                {
                                    pathname: '/unit',
                                    state: this.getUnit("apt23"),
                                }
                            }>
                                <path
                                    d="m1816.74 607.25 1321.52 0.20 0.20 1066.01 -924.48 0.19 -0.08 -908.79 -396.95 -0.15z"
                                    data-code="apt23"
                                    className="unit"/>
                            </Link>
                                : <path
                                    d="m1816.74 607.25 1321.52 0.20 0.20 1066.01 -924.48 0.19 -0.08 -908.79 -396.95 -0.15z"
                                    data-code="apt23"
                                    className="unit-taken"/>
                            }
                            {this.getUnit("apt24") ?
                            <Link to={
                                {
                                    pathname: '/unit',
                                    state: this.getUnit("apt24"),
                                }
                            }>
                                <path d="m3164.73 1673.24 0.43 -1065.17 868.49 -0.31 -0.31 1066.35z"
                                      data-code="apt24"
                                      className="unit"/>
                            </Link>
                                : <path d="m3164.73 1673.24 0.43 -1065.17 868.49 -0.31 -0.31 1066.35z"
                                        data-code="apt24"
                                        className="unit-taken"/>
                            }
                            {this.getUnit("apt21") ?
                            <Link to={
                                {
                                    pathname: '/unit',
                                    state: this.getUnit("apt21"),
                                }
                            }>
                                <path
                                    d="m587.75 1480.81 -0.22 -873.23 1203.17 0.44v0.00 913.55l-179.79 -0.44 -0.22 -41.41z"
                                    data-code="apt21"
                                    className="unit"/>
                            </Link>
                                : <path
                                    d="m587.75 1480.81 -0.22 -873.23 1203.17 0.44v0.00 913.55l-179.79 -0.44 -0.22 -41.41z"
                                    data-code="apt21"
                                    className="unit-taken"/>
                            }
                            {this.getUnit("apt26") ?
                            <Link to={
                                {
                                    pathname: '/unit',
                                    state: this.getUnit("apt26"),
                                }
                            }>
                                <path
                                    d="m2187.57 2380.96 -0.02 -428.55 2349.08 0.01 0.77 456.44h-478.63 0.00l-0.31 -34.21 -16.95 0.31 -0.15 5.70z"
                                    data-code="apt26"
                                    className="unit"/>
                            </Link>
                                : <path
                                    d="m2187.57 2380.96 -0.02 -428.55 2349.08 0.01 0.77 456.44h-478.63 0.00l-0.31 -34.21 -16.95 0.31 -0.15 5.70z"
                                    data-code="apt26"
                                    className="unit-taken"/>
                            }
                            {this.getUnit("apt25") ?
                            <Link to={
                                {
                                    pathname: '/unit',
                                    state: this.getUnit("apt25"),
                                }
                            }>
                                <path
                                    d="m4059.32 1673.46 -0.22 -1119.71 1111.21 0.65 0.87 400.55 -380.06 0.87v0.00 400.77l-228.14 1.16 -0.03 315.71z"
                                    data-code="apt25"
                                    className="unit"/>
                            </Link>
                                : <path
                                    d="m4059.32 1673.46 -0.22 -1119.71 1111.21 0.65 0.87 400.55 -380.06 0.87v0.00 400.77l-228.14 1.16 -0.03 315.71z"
                                    data-code="apt25"
                                    className="unit-taken"/>

                            }
                            {this.getUnit("storage") ?
                                <Link to={
                                    {
                                        pathname: '/unit',
                                        state: this.getUnit("storage"),
                                    }
                                }>
                                    <path d="m5173.84 1567.09 -360.14 0.79 0.23 -589.04 360.48 -0.23z"
                                          data-code="storage"
                                          className="unit"/>
                                </Link>
                                : <path d="m5173.84 1567.09 -360.14 0.79 0.23 -589.04 360.48 -0.23z"
                                        data-code="storage"
                                        className="unit-taken"/>
                            }
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Plan;
