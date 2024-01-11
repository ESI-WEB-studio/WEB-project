import { useState } from 'react';
import './App.css';
import Modal from './Modal'



function Tariff() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div>
            
            <div class="container">
                <div class="row">
                <div class="col-12 col-md-4 order-1 rate-col">
                    <div class="rate-unit">
                    <div class="rate-name">Стартовый</div>
                    <ul>
                        <li>Консультации и работы по SEO</li>
                        <li>Услуги дизайнера</li>
                        <li>Неиспользованные оплаченные часы переносятся на следующий месяц</li>
                        <li>Предоплата от 6 000 рублей в месяц</li>
                    </ul>
                    <button id="contact-button-1" class="contact-button call-form" onClick={() => setModalActive(true)}>СВЯЖИТЕСЬ С НАМИ!</button>
                    </div>
                </div>
                <div class="col-12 col-md-4 order-3 rate-col">
                    <div class="rate-unit">
                    <div class="rate-name">VIP</div>
                    <ul>
                        <li>Консультации и работы по SEO</li>
                        <li>Услуги дизайнера</li>
                        <li>Максимальное время реакции - в день обращения</li>
                        <li>Неиспользованные оплаченные часы не переносятся</li>
                        <li>Предоплата от 270 000 рублей в месяц</li>
                    </ul>
                    <button id="contact-button-2" class="contact-button call-form" onClick={() => setModalActive(true)}>СВЯЖИТЕСЬ С НАМИ!</button>
                    </div>
                </div>
                <div class="col-12 col-md-4 order-2 rate-col main-rate">
                    <div class="rate-unit">
                    <div class="rate-name">Бизнес</div>
                    <ul>
                        <li>Консультации и работы по SEO</li>
                        <li>Услуги дизайнера</li>
                        <li>Высокое время реакции - до 2 рабочих дней</li>
                        <li>Неиспользованные оплаченные часы не переносятся</li>
                        <li>Предоплата от 30 000 рублей в месяц</li>
                    </ul>
                    <button id="contact-button-3" class="contact-button call-form" onClick={() => setModalActive(true)}>СВЯЖИТЕСЬ С НАМИ!</button>
                    </div>
                </div>
                </div>
            </div>
            
            
            <Modal active={modalActive} setActive={setModalActive}/>
      </div>
      
    
  );
}

export default Tariff;

