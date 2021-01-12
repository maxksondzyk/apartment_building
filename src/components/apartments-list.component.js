import React, { Component } from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Apartment = props => (
    <tr>
        <td>{props.apartment.number}</td>
        <td>{props.apartment.floor}</td>
        <td>{props.apartment.rooms}</td>
        <td>{props.apartment.total_area}</td>
        <td>{props.apartment.living_area}</td>
        {/*<td>{props.apartment.availability}</td>*/}
        <td>{props.apartment.price}</td>
    </tr>
);


export default class ApartmentsList extends Component {
    constructor(props) {
        super(props);

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
            return <Apartment apartment={currentapartment} key={currentapartment._id}/>;
        })
    }

   render() {
       return (
           <div>
               <h3>Registered Apartments</h3>
               <table className="table">
                   <thead className="thead-light">
                   <tr>
                       <th>Number</th>
                       <th>Floor</th>
                       <th>Rooms</th>
                       <th>Total area</th>
                       <th>Living area</th>
                       {/*<th>Availability</th>*/}
                       <th>Price</th>
                   </tr>
                   </thead>
                   <tbody>
                   {
                       this.apartmentsList()
                   }
                   </tbody>
               </table>
           </div>
       )
   }
}
