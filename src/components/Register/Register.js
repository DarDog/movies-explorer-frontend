import React from 'react';
import './Register.css'

const Register = () => {
  return (
    <form className='register' name='register'>
      <div className="register__inputs">
        <label className='register__label'>Имя</label>
        <input className='register__input' type="text"/>
        <span className='register__error'>{}</span>
        <label className='register__label'>E-mail</label>
        <input className='register__input register__input_status_correct' type="email"/>
        <span className='register__error'>{}</span>
        <label className='register__label'>Пароль</label>
        <input className='register__input register__input_status_error' type="password"/>
        <span className='register__error'>Не пароль</span>
      </div>
      <button className="register__submit">Зарегистрироваться</button>
    </form>
  );
}

export default Register;
