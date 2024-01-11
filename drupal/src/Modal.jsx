import React from 'react';
import './Modal.css'


const Modal = ({active, setActive}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__content col-md-6 col-12' onClick={e => e.stopPropagation()}>
                <div class="col-12 col-md-6">
                    <div class="form-block">
                        <form id="footer-form">
                            <input name="name" id="footer-name" type="text" class="footer-block-input" placeholder="Ваше имя" required />
                            <input name="number" id="footer-number" type="text" class="footer-block-input" placeholder="Телефон" required />
                            <input name="email" id="footer-email" type="email" class="footer-block-input" placeholder="E-mail" required />
                            <textarea name="message" id="footer-message" placeholder="Ваш комментарий" class="footer-block-input"></textarea>
                            <label for="footer-policy" class="chb-block">                                    <input name="footer-policy" type="checkbox" class="chb" id="footer-policy" />
                                <span class="chb-place"></span>
                                <span>
                                    <span class="footer-checkbox-text">Отправляя заявку, я даю согласие на
                                        <a href="">обработку своих персональных данных</a>
                                    </span>
                                </span>
                            </label>
                        
                            <input id="sendButton" type="submit" class="footer-contact-button" value="СВЯЖИТЕСЬ С НАМИ"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;