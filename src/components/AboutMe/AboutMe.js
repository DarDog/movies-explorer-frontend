import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import Ul from "../Ul/Ul";
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section className='about-me' id='about-me'>
      <SectionTitle>Студент</SectionTitle>
      <div className='about-me__info'>
        <div className='about-me__container'>
          <h3 className='about-me__name'>Владислав</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 24 года</p>
          <p className='about-me__paragraph'>Я родом из города Южно-Сахалинск. Готов как к работе удаленно в любом
            часовом поясе так и к переезду.
            Увлекаюсь фотографией и настольными играми. Я 3 года работал оператором 1С в розничной компании, но решил
            сменить деятельность и занялся веб-разработкой. Сейчас я ищу свою работу мечты и возможно я ваш сотрудник
            мечты.</p>
          <Ul>
            <li className='about-me__item'>
              <a href="https://vk.com/me_here_fine" className='about-me__link'>VK</a>
            </li>
            <li className='about-me__item'>
              <a href="https://github.com/DarDog" className='about-me__link'>Github</a>
            </li>
          </Ul>
        </div>
        <img
          className='about-me__image'
          src="https://sun9-79.userapi.com/impg/UNNsPwvOp3BZIil4jO23M9rSxpjC5hBjb3DqTw/2RerGfe7TJo.jpg?size=1400x934&quality=96&sign=b4e0c3a162765733fa367a2291d1926d&type=album"
          alt="Моя фотография"
        />
      </div>
    </section>
  );
}

export default AboutMe;
