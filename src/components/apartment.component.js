import React, { Component } from 'react';
import axios from 'axios';

import "../styles/apartment.styles.css"

import apt21 from '../images/apt21_1.png'
import apt22 from '../images/apt22_1.png'
import apt23 from '../images/apt23_1.png'
import apt24 from '../images/apt24.png'
import apt25 from '../images/apt25_1.png'
import apt26 from '../images/apt26.png'


let typeApt = "";

const AnApartment = props => (
    <tr>
        <td>{props.apartment.number}</td>
        <td>{props.apartment.floor}</td>
        <td>{props.apartment.rooms}</td>
        <td>{props.apartment.total_area}</td>
        <td>{props.apartment.living_area}</td>
        <td>{props.apartment.availability}</td>
        <td>{props.apartment.price}</td>
    </tr>
);

const ApartmentFloor = props => (
    <option>{props.apartment.floor}</option>
);


export default class Apartment extends Component {
    constructor(props) {
        super(props);


        if(props.location.state){
            typeApt = props.location.state;
        }


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
            image = apt21;
        }
        else if(typeApt==="apt22"){
            image = apt22;
        }
        else if(typeApt==="apt23"){
            image = apt23;
        }
        else if(typeApt==="apt24"){
            image = apt24;
        }
        else if(typeApt==="apt25"){
            image = apt25;
        }
        else {
            image = apt26;
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
