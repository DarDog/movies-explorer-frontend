import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { mainApi } from "../../utils/MainApi";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate()
  const { handleChange, values, errors, isValid, setIsValid } = useForm();
  const [error, setError] = useState('')

  const getErrorMassage = (err) => {
    return err.json();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    mainApi.signIn({
      email: values.email,
      password: values.password
    })
      .then(() => {
        signIn(() => navigate('/movies', { replace: true }));
      })
      .catch(err => {
        setIsValid(false)
        getErrorMassage(err)
          .then(res => setError(res.validation ? res.validation.body.message : res.message))
      })
  }

  return (
    <form className='login' name='login' noValidate onSubmit={ handleSubmit }>
      <div className="login__inputs">
        <label className='login__label'>E-mail</label>
        <input className={ `login__input ${ errors.email && 'login__input_status_error' }` } name='email' type="email"
               value={ values.email || '' } onChange={ handleChange } required/>
        <span className='login__error'>{ errors.email }</span>
        <label className='login__label'>Пароль</label>
        <input className={ `login__input ${ errors.password && 'login__input_status_error' }` } name='password'
               type="password" value={ values.password || '' } onChange={ handleChange } minLength={ 8 }
               maxLength={ 30 }
               required/>
        <span className='login__error'>{ errors.password }</span>
      </div>
      <span className='login__error'>{ error }</span>
      <button className={ `login__submit ${ !isValid && 'login__submit_disable' }` }>Войти</button>
    </form>
  );
}

export default Login;
