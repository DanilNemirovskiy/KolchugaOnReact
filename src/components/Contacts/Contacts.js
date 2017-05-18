import React, { Component } from 'react';
import './Contacts.css';
var phone  =  require('./../../defaultProps.json/../images/phone.png');
var email  =  require('./../../defaultProps.json/../images/email.png');


class Contacts extends Component {
    render() {
        return(
            <div className="contacts">
                <div className="phone">
                    <img src={phone} alt="здесь должна быть картинка"/>
                    <span><small>(044)</small> <b>536-26-43</b>, <small>(098)</small> <b>152-16-03</b></span>
                </div>
                <div className="email">
                    <img src={email} alt="здесь должна быть картинка"/>
                    {this.props.items.map((item, index) =>
                        <a href={item.link} key={index}>{item.label}</a>
                    )}
                </div>
            </div>
        );
    }
}
export default Contacts;