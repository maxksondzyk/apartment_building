import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/contacts.style.css"


export default class Contacts extends Component {

    render() {
        return (

          <div className="container rounded">
              <h3>Email:
                  <small>    maksym.ksondzyk@ukma.edu.ua</small>
              </h3>
              <h3>
                  Phone:
                  <small>    (+380) 99-646-31-90</small>
              </h3>
              <a href="http://www.facebook.com/" className="fb btn btn-primary">Facebook</a>
              <h3>Instagram</h3>
          </div>
        );
    }
}
