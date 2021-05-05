import React, { Component } from 'react';

import "../styles/apartment.styles.css"

const AnApartment = props => (
    <div className={"aptInfo"}>
        <div className={"container cont-apt-num"}>
            {/*<h3>Number</h3>*/}
            <h1 className={"h1-num"}>Apartment {props.apartment.number}</h1>
        </div>
        <h4>{props.apartment.floor} floor</h4>
        <h4>{props.apartment.rooms} rooms</h4>
        <h4>{props.apartment.total_area} sqft</h4>
        <h4>{props.apartment.price}$</h4>
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
                   <div className="col-md-5 plan-div">
                       <img className={"aptImage"} src={image} width="100%" alt="Apartment plan"/>
                   </div>
                   <div className="col-sm-5">
                           {
                               this.apartmentsList()
                           }
                   </div>
               </div>
           </div>
       )
   }
}
