import React, { Component } from 'react';
import axios from 'axios';

import "../styles/apartment.styles.css"



let typeApt = "";
let floor = ""

// const AnApartment = props => (
//     <tr>
//         <td>{props.apartment.number}</td>
//         <td>{props.apartment.floor}</td>
//         <td>{props.apartment.rooms}</td>
//         <td>{props.apartment.total_area}</td>
//         <td>{props.apartment.living_area}</td>
//         <td>{props.apartment.availability}</td>
//         <td>{props.apartment.price}</td>
//     </tr>
// );

const ApartmentFloor = props => (
    <option>{props.apartment.floor}</option>
);


export default class Apartment extends Component {
    constructor(props) {
        super(props);


        if(props.location.state){
            typeApt = props.location.state;
            floor = props.location.floor;
        }
        alert(floor)


        console.log(props.location.state);
        this.state = { apartments: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/apartments/')
            .then(response => {
                this.setState({ apartments: response.data })

            })
            .catch((error) => {
                console.log(error);
            })
    }

    apartmentsList() {
        return this.state.apartments.map(currentapartment => {
            return currentapartment.availability === true && currentapartment.planning === typeApt ? <ApartmentFloor apartment={currentapartment}  key={currentapartment._id}/> : null;
        })
    }

   render() {
        let image;
        if(typeApt==="apt21") {
            image = "https://i.ibb.co/ZxP9DcS/apt21.png";
        }
        else if(typeApt==="apt22"){
            image = "https://i.ibb.co/n60rPFs/apt22.png";
        }
        else if(typeApt==="apt23"){
            image = "https://i.ibb.co/xzLzCqK/apt23.png";
        }
        else if(typeApt==="apt24"){
            image = "https://i.ibb.co/9nQ7080/apt24.png";
        }
        else if(typeApt==="apt25"){
            image = "https://i.ibb.co/bXWrByx/apt25.png";
        }
        else {
            image = "https://i.ibb.co/XbNXjsg/apt26.png";
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
                   <div className="col-sm-1">
                       <label htmlFor="exampleFormControlSelect1">Floor</label>
                       <select className="form-control" id="exampleFormControlSelect1">
                           {
                               this.apartmentsList()
                           }
                       </select>
                   </div>
               </div>
           </div>
       )
   }
}
