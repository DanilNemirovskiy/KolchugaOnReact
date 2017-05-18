import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contacts from './components/Contacts/Contacts.js';
import Navigation from './components/Navigation/Navigation.js';
import Content_In_Header from './components/ContentInHeader/Content_In_Header.js';
import Why from './components/Why/Why.js';
import Catalog from './components/Catalog/Catalog.js';
import Info from './components/Info/Info.js';
import Footer from './components/Footer/Footer.js';


const email = [
    {
        link: '/Info@kolchuga.kiev.ua',
        label: 'Info@kolchuga.kiev.ua'
    },
]

const navigation = [
    {
        link: '/Главная',
        label: 'Главная'
    },
    {
        link: '/Каталог_Продукции',
        label: 'Каталог продукции'
    },
    {
        link: '/Доставка/Установка',
        label: 'Доставка/Установка'
    },
    {
        link: '/Стать_Партнером',
        label: 'Стать партнером'
    },
    {
        link: '/Контакты',
        label: 'Контакты'
    },
]

const why = [
    {
        link: '/Защита_От_Удара',
        p: 'Защита от удара'
    },
    {
        link: '/Защита_От_Пыли,Влаги_И_Грязи',
        p: 'Защита от пыли, влаги и грязи'
    },
    {
        link: '/Защита_От_Перегрева',
        p: 'Защита от перегрева'
    },
    {
        link: '/Надежность_Крепления',
        p: 'Надежность крепления'
    },
    {
        link: '/Аэродинамика',
        p: 'Аэродинамика'
    },
    {
        link: '/Повышенная_Прочность',
        p: 'Повышенная прочность'
    },
]


const catalog = [
    {
        link: '/Products_For_Acura',
        img: './images/marka1.png'
    },
    {
        link: '/Products_for_Alfa-Romeo',
        img: './images/marka2.png'
    },
    {
        link: '/Products_For_Audi',
        img: './images/marka3.png'
    },
    {
        link: '/Products_For_Bmw',
        img: './images/marka4.png'
    },
    {
        link: '/Products_For_Cadillac',
        img: './images/marka5.png'
    },
    {
        link: '/Products_For_Chery',
        img: './images/marka6.png'
    },
]




class App extends Component {
  render() {
    return(
      <div className='wrapper-wrapper'>
          <div className='header-wrapper'>
            <div className='header'>
                <Contacts items={email}/>
                <Navigation items={navigation}/>
                <Content_In_Header/>
            </div>
          </div>
          <div className='content-wrapper'>
            <div className='content'>
               <Why items={why}/>
               <Catalog items={catalog}/>
                <Info/>
            </div>
          </div>
          <div className='footer-wrapper'>
            <div className='footer'>
              <Footer/>
            </div>
          </div>
      </div>
      );
  }
}


ReactDOM.render(
  <div>
        <App/>
    </div>,
  document.getElementById('root')
);
