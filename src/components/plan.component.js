import React from 'react';

import "../styles/plan.styles.css"
import { Link } from 'react-router-dom';
import planImg from '../images/main_plan.png'

let floor = ""
class Plan extends React.Component {
    constructor(props) {
        super(props);


        if(props.location.state){
            floor = props.location.state;
        }


        console.log(props.location.state);
        this.state = { apartments: []};
    }
    render() {

        return (
            <div className="cont">
                <img className="planImg" src={"https://i.ibb.co/pw17bbw/Main-plan.png"} alt={"Apartments plan"}/>
                <svg viewBox="0 50 900 400">
                    <text x="120" y="125" fill="white">APT21</text>
                    <g transform="scale(0.16)">
                        <Link to={
                        {
                            pathname: '/apartment',
                            state:"apt22",
                            floor:floor
                        }
                        }>
                        <path d="m587.75 2380.85 -0.65 -873.78 997.33 -0.85v0.00 445.88l163.65 0.62 0.31 427.47z"
                              data-code="apt22"
                              className="jvectormap-region jvectormap-element apt"/>
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartment',
                                state:"apt23",
                                floor:floor
                            }
                        }>
                        <path d="m1816.74 607.25 1321.52 0.20 0.20 1066.01 -924.48 0.19 -0.08 -908.79 -396.95 -0.15z"
                              data-code="apt23"
                              className="jvectormap-region jvectormap-element apt"/>
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartment',
                                state:"apt24",
                                floor:floor
                            }
                        }>
                        <path d="m3164.73 1673.24 0.43 -1065.17 868.49 -0.31 -0.31 1066.35z"
                              data-code="apt24"
                              className="jvectormap-region jvectormap-element apt"/>
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartment',
                                state:"apt21",
                                floor:floor
                            }
                        }>
                        <path d="m587.75 1480.81 -0.22 -873.23 1203.17 0.44v0.00 913.55l-179.79 -0.44 -0.22 -41.41z"
                              data-code="apt21"
                              className="jvectormap-region jvectormap-element apt"/>
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartment',
                                state:"apt26",
                                floor:floor
                            }
                        }>
                        <path
                            d="m2187.57 2380.96 -0.02 -428.55 2349.08 0.01 0.77 456.44h-478.63 0.00l-0.31 -34.21 -16.95 0.31 -0.15 5.70z"
                            data-code="apt26"
                            className="jvectormap-region jvectormap-element apt"/>
                        </Link>
                        <Link to={
                            {
                                pathname: '/apartment',
                                state:"apt25",
                                floor:floor
                            }
                        }>
                        <path
                            d="m4059.32 1673.46 -0.22 -1119.71 1111.21 0.65 0.87 400.55 -380.06 0.87v0.00 400.77l-228.14 1.16 -0.03 315.71z"
                            data-code="apt25"
                            className="jvectormap-region jvectormap-element apt"/>
                        </Link>
                    </g>
                </svg>

            </div>
        );
    }
}

export default Plan;
