import React, { Component } from 'react';
import './Content_In_Header.css';
var icon  =  require('./../../defaultProps.json/../images/button-icon.png');


class Content_In_Header extends Component {
    modalWindow(event) {
        function showCover() {
            var coverDiv = document.createElement('div');
            coverDiv.id = 'cover-div';
            document.body.appendChild(coverDiv);
        }

        function hideCover() {
            document.body.removeChild(document.getElementById('cover-div'));
        }

        function showPrompt(text, callback) {
            showCover();
            var form = document.getElementById('prompt-form');
            var container = document.getElementById('prompt-form-container');
            document.getElementById('prompt-message').innerHTML = text;
            form.elements.text.value = '';

            function complete(value) {
                hideCover();
                container.style.display = 'none';
                document.onkeydown = null;
                callback(value);
            }

            form.onsubmit = function() {
                var value = form.elements.text.value;
                if (value == '') return false; // игнорировать пустой submit

                complete(value);
                return false;
            };

            form.elements.cancel.onclick = function() {
                complete(null);
            };

            document.onkeydown = function(e) {
                if (e.keyCode == 27) { // escape
                    complete(null);
                }
            };

            var lastElem = form.elements[form.elements.length - 1];
            var firstElem = form.elements[0];

            lastElem.onkeydown = function(e) {
                if (e.keyCode == 9 && !e.shiftKey) {
                    firstElem.focus();
                    return false;
                }
            };

            firstElem.onkeydown = function(e) {
                if (e.keyCode == 9 && e.shiftKey) {
                    lastElem.focus();
                    return false;
                }
            };


            container.style.display = 'block';
            form.elements.text.focus();
        }

        document.getElementById('button').onclick = function() {
            showPrompt("Введите свой электронный адрес для получения скидки на продукция Кольчуга :", function(value) {
                alert("Ваш электронный адрес: " + value);
            });
        };
    }
    render(){
        return(
            <div className="header-content">
                <div id="prompt-form-container">
                    <form id="prompt-form">
                        <div id="prompt-message"></div>
                        <input id="input" name="text" type="text"/>
                        <div id="buttons">
                            <input id="okey" type="submit" value="Ок"/>
                            <input id="cancel" type="button" name="cancel" value="Отмена"/>
                        </div>
                    </form>
                </div>
                <div className="text">
                    <h1>ТМ "КОЛЬЧУГА"</h1>
                    <h2>Система защиты моторного отсека автомобиля</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu nisi eu enim<br/> bibendum aliquet. Donec in risus facilisis, dignissim diam id, ornare tellus.<br/> Aliquam.Proin eu nisi eu enim bibendum aliquet.</p>
                </div>
                <div>
                    <button id="button" onClick={this.modalWindow}>
                        <img src={icon} alt="здесь должна быть картинка"/>
                        <p className='sign'>Обратная связь</p>
                    </button>
                </div>
            </div>
        );
    }
}

export default Content_In_Header;