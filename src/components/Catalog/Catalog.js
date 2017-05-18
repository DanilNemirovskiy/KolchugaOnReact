import React, { Component } from 'react';
import './Catalog.css';
import Slider from '../../../node_modules/react-slick';



class Catalog extends Component {
    render(){
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: <img className="arrow-left" src="../../images/arrow-left.png" alt="здесь должна быть картинка" />,
            nextArrow: <img className="arrow-right" src="../../images/arrow-right.png" alt="здесь должна быть картинка"/>
        };
        return(
            <div className="catalog">
                <div className="title2">
                    <h1>Каталог продукции</h1>
                </div>
                <div className="indicator">
                    <hr/><hr className="hr2"/>
                </div>
                <div className="marks">
                    <ul id="lightSlider">
                        <Slider {...settings}>
                            <li>
                                <ul className="liInli">
                                    {this.props.items.map((item, index) =>
                                        <li key={index}><a href={item.link}><img src={item.img} alt="тут должна быть картинка"/></a></li>
                                    )}
                                </ul>
                            </li>
                            <li>
                                <ul className="liInli">
                                    {this.props.items.map((item, index) =>
                                        <li key={index}><a href={item.link}><img src={item.img} alt="тут должна быть картинка"/></a></li>
                                    )}
                                </ul>
                            </li>
                        </Slider>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Catalog;
