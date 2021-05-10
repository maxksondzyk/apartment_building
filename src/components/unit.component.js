import React, { Component } from 'react';

import "../styles/unit.styles.css"

const UnitInfo = props => (
    <div className={"unit-info"}>
        <div className={"container unit-info-container"}>
            {/*<h3>Number</h3>*/}
            {props.unit.planning === "storage" ?
                <h1 className={"h1-num"}>Storage unit {props.unit._id}</h1>
                : <h1 className={"h1-num"}>Apartment {props.unit._id}</h1>
            }
        </div>
        <h4>{props.unit.floor} floor</h4>
        {
            props.unit.rooms === 1 ? <h4>1 room</h4> :  props.unit.rooms === 0 ? <h4>studio</h4> : <h4>{props.unit.rooms} rooms</h4>
        }
        <h4>{props.unit.total_area} sqft</h4>
        <h4>{props.unit.price}$</h4>
    </div>
);

export default class Unit extends Component {
    constructor(props) {
        super(props);


        if(props.location.state){
            this.state = { unit: props.location.state};
        }

        console.log(props.location.state);

    }

    unitsList() {
        if(this.state) {
            return <UnitInfo unit={this.state.unit} key={this.state.unit._id}/>;
        }
    }

   render() {
       let image;
        if(this.state) {
            if (this.state.unit.planning === "apt21") {
                image = "https://i.ibb.co/ZxP9DcS/apt21.png";
            } else if (this.state.unit.planning === "apt22") {
                image = "https://i.ibb.co/n60rPFs/apt22.png";
            } else if (this.state.unit.planning === "apt23") {
                image = "https://i.ibb.co/xzLzCqK/apt23.png";
            } else if (this.state.unit.planning === "apt24") {
                image = "https://i.ibb.co/9nQ7080/apt24.png";
            } else if (this.state.unit.planning === "apt25") {
                image = "https://i.ibb.co/bXWrByx/apt25.png";
            } else if (this.state.unit.planning === "apt26") {
                image = "https://i.ibb.co/XbNXjsg/apt26.png";
            }
            else image = "https://i.ibb.co/mRV0Mpd/storage1.png";
        }
       return (
               <div className="unit-container">
                   <div className="plan-div">
                       <img className={"unit-image"} src={image} width={this.state.unit.planning === "storage" ? "50%" : "100%"} alt="Unit plan"/>
                   </div>
                   <div className="info-div">
                       {
                           this.unitsList()
                       }
                   </div>
               </div>
       )
   }
}
