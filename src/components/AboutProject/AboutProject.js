import React from 'react';
import './AboutProject.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import Ul from "../Ul/Ul";

const AboutProject = () => {
  return(
    <section className='about' id='about-project'>
      <SectionTitle>О проекте</SectionTitle>
      <Ul anotherClass='about__list'>
        <li className='about__item'>
          <h3 className='list__title'>Дипломный проект включает 5 этапов</h3>
          <p className='list__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности
            и финальные доработки.</p>
        </li>
        <li className='about__item'>
          <h3 className='list__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='list__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
            чтобы успешно защититься.</p>
        </li>
      </Ul>
      <div className='about__track'>
        <div className='track__element track__element_type_back-end'>
          <div className='track__bar track__bar_type_back-end'>1 неделя</div>
          <p className='track__bar-name'>Back-end</p>
        </div>
        <div className='track__element track__element_type_front-end'>
          <div className='track__bar track__bar_type_front-end'>4 недели</div>
          <p className='track__bar-name'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
