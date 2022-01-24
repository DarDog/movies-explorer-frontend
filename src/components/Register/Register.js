import React, { useState } from 'react';
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import './Register.css'
import { useForm } from "../../hooks/useForm";
import { mainApi } from "../../utils/MainApi";

const Register = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { handleChange, values, errors, isValid, setIsValid } = useForm();
  const [error, setError] = useState('');

  const getErrorMassage = (err) => {
    return err.json();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    mainApi.signUp({
      email: values.email,
      name: values.name,
      password: values.password
    })
      .then(() => {
        mainApi.signIn({
          email: values.email,
          password: values.password
        })
          .then(() => {
            signIn(() => navigate('/movies', { replace: true }));
          })
          .catch(err => {
            setError(err)
          })
      })
      .catch((err) => {
        setIsValid(false)
        getErrorMassage(err)
          .then(res => setError(res.validation ? res.validation.body.message : res.message))
      })
  }

  return (
    <form className='register' name='register' noValidate onSubmit={ handleSubmit }>
      <div className="register__inputs">
        <label className='register__label'>Имя</label>
        <input className={ `register__input ${ errors.name && 'register__input_status_error' }` } name='name'
               type="text" required onChange={ handleChange } value={ values.name || '' } minLength={ 2 }
               maxLength={ 30 }/>
        <span className='register__error'>{ errors.name }</span>
        <label className='register__label'>E-mail</label>
        <input className={ `register__input ${ errors.email && 'register__input_status_error' }` } name='email'
               type="email" required onChange={ handleChange } value={ values.email || '' }/>
        <span className='register__error'>{ errors.email }</span>
        <label className='register__label'>Пароль</label>
        <input className={ `register__input ${ errors.password && 'register__input_status_error' }` } name='password'
               type="password" required onChange={ handleChange } value={ values.password || '' } minLength={ 8 }
               maxLength={ 30 }/>
        <span className='register__error'>{ errors.password }</span>
      </div>
      <span className='register__error'>{error}</span>
      <button className={ `register__submit ${ !isValid && 'register__submit_disable' }` }>Зарегистрироваться</button>
    </form>
  );
}

export default Register;
