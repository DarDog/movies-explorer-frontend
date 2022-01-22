import React from 'react';
import Navigation from "../Navigation/Navigation";
import './Header.css'
import { Link } from "react-router-dom";
import LoginMenu from "../LoginMenu/LoginMenu";
import { useAuth } from "../../hooks/useAuth";

const Header = (props) => {
  const {user} = useAuth();

  return (
    <header className='header page__header'>
      <Link to='/' className='logo'/>
      {user ? <Navigation/> : <LoginMenu/>}
      {user && <button onClick={props.handleClick} type='button' className='header__burger-menu'/>}
    </header>
  );
}

export default Header;
