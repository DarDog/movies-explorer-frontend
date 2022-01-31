import React, { useEffect, useState } from 'react';
import Header from "../Header/Header";
import './Profile.css'
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { mainApi } from "../../utils/MainApi";

const Profile = (props) => {
  const { user, signOut, updateUser } = useAuth();
  const navigate = useNavigate();
  const { handleChange, values, errors, isValid, setValues, setIsValid } = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setValues({name: user.name, email: user.email})
  }, [user]);

  useEffect(() => {
    setSuccess(false)
    if (values.name === user.name && values.email === user.email) {
      setIsValid(false);
    }
  }, [values]);

  const getErrorMassage = (err) => {
    return err.json();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsValid(false);
    mainApi.updateCurrentUser({
      email: values.email,
      name: values.name
    })
      .then((user) => {
        updateUser(user);
        setSuccess(true);
      })
      .catch(err => {
        setIsValid(false)
        getErrorMassage(err)
          .then(res => setError(res.validation ? res.validation.body.message : res.message))
      })
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
          <span className='form__success'>{success && 'Данные успешно изменены' }</span>
          <span className='form__error form__error_position_center'>{ error }</span>
        </form>
        <button type='button' className='profile__exit' onClick={ handleSignOut }>Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile
