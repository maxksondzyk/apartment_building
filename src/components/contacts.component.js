import React, { Component } from 'react';

import "../styles/contacts.style.css"
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import { BiPhone } from 'react-icons/bi'

export default class Contacts extends Component {

    render() {
        return (
            <>
                <div className={"pageLabel"}>
                    <h1>Contacts</h1>
                </div>
                <div className={"container"}>
                    <div className={'row contacts-container rounded'}>
                        <div className="contacts-div container rounded">
                            <h4>
                                Contact us
                            </h4>
                            <h4>
                                <MdMail/>
                                <a className={"contact-link"} href={"mailto: maksym.ksondzyk@ukma.edu.ua"}><small>maksym.ksondzyk@ukma.edu.ua</small></a>
                            </h4>
                            <h4>
                                <BsPhone/>
                                <a className={"contact-link"} href="tel:+380994443399"><small>(+380) 99-444-33-99</small></a>
                            </h4>
                            <h4>
                                <BiPhone/>
                                <a className={"contact-link"} href="tel: 0444443399"><small>(044) 444-33-99</small></a>
                            </h4>
                            <hr className="solid"/>
                            <h3>
                                <a className={"link-icon"} href="https://www.facebook.com/imaxksondzyk">{<FaFacebookF/>}</a>
                                <a className={"link-icon"} href="https://www.instagram.com/cat_rob_/">{<FaInstagram/>}</a>
                            </h3>
                        </div>
                        <div className="contacts-div container rounded">
                            <h4>
                               Sales Departments
                            </h4>
                            <h4>
                                <a className={"contact-link"} href="https://maps.google.com/?q=Kyiv, Hlybochytska st, 13"><small>Kyiv, Hlybochytska st, 13</small></a>
                            </h4>
                            <h4>
                                <a className={"contact-link"} href="https://maps.google.com/?q=Kyiv, Povitroflotskyi ave, 56"><small>Kyiv, Povitroflotskyi ave, 56</small></a>
                            </h4>
                            <h4>
                                <a className={"contact-link"} href="https://maps.google.com/?q=Kyiv, Velyka Vasylkivska st, 43"><small>Kyiv, Velyka Vasylkivska st, 43</small></a>
                            </h4>
                            {/*<h4>*/}
                            {/*    <small>Kyiv, Mykhaila Boichuka st, 43</small>*/}
                            {/*</h4>*/}


                            <hr className="solid"/>


                            <h4>
                                Work Schedule
                            </h4>
                            <h4>
                                <small>Mon-Fri: 10:00 - 20:00</small>
                            </h4>
                            <h4>
                                <small>Sat: 12:00- 17:00</small>
                            </h4>
                            <h4>
                                <small>Sun: holiday</small>
                            </h4>
                        </div>
                    </div>
                </div>
                </>
        );
    }
}
