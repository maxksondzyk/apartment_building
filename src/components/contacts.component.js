import React, { Component } from 'react';

import "../styles/contacts.style.css"
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'

export default class Contacts extends Component {

    render() {
        return (

          <div className="container rounded">
              <h3>
                  <MdMail/>
                  <small>    maksym.ksondzyk@ukma.edu.ua</small>
              </h3>
              <h3>
                  <BsPhone/>
                  <small>    (+380) 99-646-31-90</small>
              </h3>
              <h3>
                  <a className={"link-icon"} href="https://www.facebook.com/imaxksondzyk">{<FaFacebookF/>}</a>
                  <a className={"link-icon"} href="https://www.instagram.com/cat_rob_/">{<FaInstagram/>}</a>
              </h3>
          </div>
        );
    }
}
