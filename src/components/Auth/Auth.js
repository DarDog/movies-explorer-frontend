import React from 'react';
import { Link } from "react-router-dom";
import './Auth.css'

const Auth = (props) => {
  return (
    <div className='auth'>
      <div className='auth__greetings'>
      <div className='auth__logo'/>
      <h1 className='auth__title'>{ props.isRegister ? 'Добро пожаловать!' : 'Рады видеть!' }</h1>
      </div>
      {props.children}
      <div className='auth__footer'>
      <p className='auth__paragraph'>
        { props.isRegister ? 'Уже зарегистрированы? ' : 'Еще не зарегистрированы? ' }
        { props.isRegister ? <Link to='/sign-up' className='auth__link'>Войти</Link> : <Link to='/sign-in' className='auth__link'>Регистрация</Link> }
      </p>
      </div>
    </div>
  );
}

export default Auth;
