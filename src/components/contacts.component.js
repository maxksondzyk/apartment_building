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
                    <div className={'row contacts-container'}>
                        <div className="contacts-div">
                            <h5>
                                Зв'яжіться з нами
                            </h5>
                            <h6>
                                <MdMail/>
                                <a className={"contact-link"} href={"mailto: maksym.ksondzyk@ukma.edu.ua"}><small>maksym.ksondzyk@ukma.edu.ua</small></a>
                            </h6>
                            <h6>
                                <BsPhone/>
                                <a className={"contact-link"} href="tel:+380994443399"><small>(+380) 99-444-33-99</small></a>
                            </h6>
                            <h6>
                                <BiPhone/>
                                <a className={"contact-link"} href="tel: 0444443399"><small>(044) 444-33-99</small></a>
                            </h6>
                            <hr className="solid"/>
                            <h5>
                                <a className={"link-icon"} href="https://www.facebook.com/imaxksondzyk">{<FaFacebookF/>}</a>
                                <a className={"link-icon"} href="https://www.instagram.com/cat_rob_/">{<FaInstagram/>}</a>
                            </h5>
                        </div>
                        <div className="contacts-div">
                            <h5>
                               Відділи продажів
                            </h5>
                            <h6>
                                <a className={"contact-link"} href="https://maps.google.com/?q=Kyiv, Hlybochytska st, 13"><small>Київ, Глибочицька, 13</small></a>
                            </h6>
                            <h6>
                                <a className={"contact-link"} href="https://maps.google.com/?q=Kyiv, Povitroflotskyi ave, 56"><small>Київ, Повітрофлотський проспект, 56</small></a>
                            </h6>
                            <h6>
                                <a className={"contact-link"} href="https://maps.google.com/?q=Kyiv, Velyka Vasylkivska st, 43"><small>Київ, Велика Васильківська, 43</small></a>
                            </h6>
                        </div>
                        <div className="contacts-div">
                            <h5>
                                Графік роботи
                            </h5>
                            <h6>
                                <small>Пн-Пт: 10:00 - 20:00</small>
                            </h6>
                            <h6>
                                <small>Сб: 12:00- 17:00</small>
                            </h6>
                            <h6>
                                <small>Нд: вихідний</small>
                            </h6>
                        </div>

                    </div>
        );
    }
}
