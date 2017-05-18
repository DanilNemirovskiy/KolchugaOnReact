import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component{
    static defaultProps = {
        dva_com:'dva_com.png'
    }
    render(){
        return(
            <div className='footer-wrapper-wrapper'>
                <div className="rights">
                    <p>2015 "ТМ Кольчуга". Все права защищены.</p>
                </div>
                <div className="dva_com">
                    <p>Создание сайта:</p>
                    <img src={'./images/' + this.props.dva_com} alt=""/>
                </div>
            </div>
        );
    }
}

export default Footer;