import React, { Component } from 'react';
import './Navigation.css';
var logo  =  require('./../../defaultProps.json/../images/logo.png');


class Navigation extends Component {
    render() {
        return(
            <div className='navigation-wrapper'>
                <div className="logo">
                    <a href="#"><img src={logo} alt="здесь должна быть картинка"/></a>
                </div>
                <div className="navigation">
                    <ul>
                        {this.props.items.map((item, index) =>
                            <li key={index}><a href={item.link}>{item.label}</a></li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navigation;