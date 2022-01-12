import React from 'react';
import { Link } from 'react-scroll';
import './NavTab.css';
import Ul from "../Ul/Ul";

const NavTab = () => {
  return (
    <section className='navtab'>
      <Ul anotherClass='navtab__list'>
        <li className="navtab__item">
          <Link
            to="about-project"
            smooth={ true }
            offset={ -50 }
            duration={ 300 }
            className='navtab__link'
          >
            О проекте
          </Link>
        </li>
        <li className="navtab__item">
          <Link
            to="tech"
            smooth={ true }
            offset={ -50 }
            duration={ 600 }
            className='navtab__link'
          >
            Технологии
          </Link>
        </li>
        <li className="navtab__item">
          <Link
            to="about-me"
            smooth={ true }
            offset={ -50 }
            duration={ 900 }
            className='navtab__link'
          >
            Студент
          </Link>
        </li>
      </Ul>
    </section>
  )
}

export default NavTab;
