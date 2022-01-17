import React from 'react';
import './Footer.css'
import Ul from "../Ul/Ul";

const Footer = () => {
  return(
    <footer className='footer'>
      <p className='footer__paragraph'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__info'>
        <p className="footer__copyright">&#169; 2022</p>
        <Ul anotherClass='footer__list'>
          <li className='footer__item'><a href="https://practicum.yandex.ru/" className='footer__link'>Яндекс.Практикум</a></li>
          <li className='footer__item'><a href="https://github.com/DarDog" className='footer__link'>Github</a></li>
          <li className='footer__item'><a href="https://vk.com/me_here_fine" className='footer__link'>VK</a></li>
        </Ul>
      </div>
    </footer>
  );
}

export default Footer
