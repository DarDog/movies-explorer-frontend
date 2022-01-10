import React from 'react';
import './Login.css'

const Login = () => {
  return(
    <form className='login'>
      <div className="login__inputs">
        <label className='login__label'>E-mail</label>
        <input className='login__input' type="email"/>
        <span className='login__error'>{}</span>
        <label className='login__label'>Пароль</label>
        <input className='login__input' type="password"/>
        <span className='login__error'>{}</span>
      </div>
      <button className="login__submit">Войти</button>
    </form>
  );
}

export default Login;
