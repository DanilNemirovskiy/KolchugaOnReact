import React, { Component } from 'react';
import './Why.css';

class Why extends Component {
    render(){
        return(
            <div className="why">
                <div className="title">
                    <h1>Почему необходимо установить защиту картера "Кольчуга"?</h1>
                </div>
                <div className="indicator">
                    <hr/><hr className="hr2"/>
                </div>
                <div className="icons">
                    <ul>
                        <li>
                            {this.props.items.map((item, index) =>
                                <li key={index}>
                                    <a href={item.link}>
                                        <p>{item.p}</p>
                                    </a>
                                </li>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default Why;