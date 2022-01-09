import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import Ul from "../Ul/Ul";
import './Tech.css'

const Tech = () => {
  return(
    <section className='tech'>
      <SectionTitle>Технологии</SectionTitle>
      <h3 className='tech__title'>7 технологий</h3>
      <p className='tech__paragraph'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте</p>
      <Ul anotherClass={'tech__list'}>
        <li className='tech__item'>HTML</li>
        <li className='tech__item'>CSS</li>
        <li className='tech__item'>JS</li>
        <li className='tech__item'>React</li>
        <li className='tech__item'>Git</li>
        <li className='tech__item'>Express.js</li>
        <li className='tech__item'>MongoDB</li>
      </Ul>
    </section>
  );
}

export default Tech;
