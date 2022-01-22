import React, { useEffect } from 'react';
import Header from "../Header/Header";
import './Profile.css'
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const Profile = (props) => {
  const { user, signOut, setUserInfo } = useAuth();
  const navigate = useNavigate();
  const { handleChange, values, errors, isValid, setValues, setIsValid } = useForm();
  let errCode;

  useEffect(() => {
    setValues({name: user.name, email: user.email})
  }, []);

  useEffect(() => {
    if (values.name === user.name && values.email === user.email) {
      setIsValid(false);
    }
  }, [values])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      setUserInfo({ email: values.email, name: values.name })
    }
  }

  const handleSignOut = () => {
    signOut(() => navigate('/', { replace: true }))
  }

  return (
    <>
      <Header handleClick={ props.handlePopupOpen }/>
      <section className='profile'>
        <h1 className='profile__title'>Привет, { user.name }!</h1>
        <form onSubmit={ handleSubmit } name='edit-profile' className='profile__form' noValidate>
          <div className='form__element'>
            <label className='form__label' htmlFor='name'>Имя</label>
            <input className='form__input' name='name' type='text' placeholder={ user.name } value={ values.name || '' }
                   onChange={ handleChange }
                   minLength='2' maxLength='30' required/>
          </div>
          <span className='form__error'>{ errors.name }</span>
          <div className='form__element'>
            <label className='form__label' htmlFor='email'>E-mail</label>
            <input className='form__input' name='email' type='email' placeholder={ user.email }
                   value={ values.email || '' } onChange={ handleChange }
                   required/>
          </div>
          <span className='form__error'>{ errors.email }</span>
          <button type='submit'
                  className={ `form__button ${ isValid ? '' : 'form__button_disable' }` }>Редактировать
          </button>
        </form>
        <button type='button' className='profile__exit' onClick={ handleSignOut }>Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile
