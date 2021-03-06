import React from 'react';
import { Link } from "react-router-dom";
import './Auth.css'
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const Auth = (props) => {
  const { user } = useAuth();
  const location = useLocation();


  if (user) {
    return <Navigate to='/movies' state={{ from: location }}/>
  }

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
        { props.isRegister ? <Link to='/signin' className='auth__link'>Войти</Link> : <Link to='/signup' className='auth__link'>Регистрация</Link> }
      </p>
      </div>
    </div>
  );
}

export default Auth;
