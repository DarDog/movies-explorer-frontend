import React from 'react';
import './Navigation.css'
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return(
    <nav className='navigation'>
      <Link to="/movies" className="logo" />
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          'navigation__link' + ( isActive ? ' navigation__link_active' : '' )
        }
      >Фильмы</NavLink>
      <NavLink
        to="/save"
        className={({ isActive }) =>
          'navigation__link' + ( isActive ? ' navigation__link_active' : '' )
        }
      >Сохранённые фильмы</NavLink>
    </nav>
  );
}

export default Navigation;
