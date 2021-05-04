import React, { Component } from 'react';

import "../styles/apartment.styles.css"

const AnApartment = props => (
    <div className={"aptInfo"}>
        <h3>Number: {props.apartment.number}</h3>
        <h3>Floor: {props.apartment.floor}</h3>
        <h3>Rooms: {props.apartment.rooms}</h3>
        <h3>Area: {props.apartment.total_area}</h3>
        <h3>Price: {props.apartment.price}</h3>
    </div>
);

// const ApartmentFloor = props => (
//     <option>{props.apartment.floor}</option>
// );


export default class Apartment extends Component {
    constructor(props) {
        super(props);


        if(props.location.state){
            this.state = { apartment: props.location.state};
        }

        console.log(props.location.state);

    }

    apartmentsList() {
        if(this.state) {
            return <AnApartment apartment={this.state.apartment} key={this.state.apartment._id}/>;
        }
    }

   render() {
       let image;
        if(this.state) {
            if (this.state.apartment.planning === "apt21") {
                image = "https://i.ibb.co/ZxP9DcS/apt21.png";
            } else if (this.state.apartment.planning === "apt22") {
                image = "https://i.ibb.co/n60rPFs/apt22.png";
            } else if (this.state.apartment.planning === "apt23") {
                image = "https://i.ibb.co/xzLzCqK/apt23.png";
            } else if (this.state.apartment.planning === "apt24") {
                image = "https://i.ibb.co/9nQ7080/apt24.png";
            } else if (this.state.apartment.planning === "apt25") {
                image = "https://i.ibb.co/bXWrByx/apt25.png";
            } else {
                image = "https://i.ibb.co/XbNXjsg/apt26.png";
            }
        }
       return (
           <div>
               {/*<table className="table ">*/}
               {/*    <thead className="thead-dark">*/}
               {/*    <tr>*/}
               {/*        <th>Number</th>*/}
               {/*        <th>Floor</th>*/}
               {/*        <th>Rooms</th>*/}
               {/*        <th>Total area</th>*/}
               {/*        <th>Living area</th>*/}
               {/*        <th>Availability</th>*/}
               {/*        <th>Price</th>*/}
               {/*    </tr>*/}
               {/*    </thead>*/}
               {/*    <tbody>*/}
               {/*    {*/}
               {/*        this.apartmentsList()*/}
               {/*    }*/}
               {/*    </tbody>*/}
               {/*</table>*/}
               <div className="row">
                   <div className="col-md-6 plan-div">
                       <img src={image} width="100%" alt="Apartment plan"/>
                   </div>
                   <div className="col-sm-5">
                       {/*<label htmlFor="exampleFormControlSelect1">Floor</label>*/}
                       {/*<select className="form-control" id="exampleFormControlSelect1">*/}
                           {
                               this.apartmentsList()
                           }
                       {/*</select>*/}
                   </div>
               </div>
           </div>
       )
   }
}
