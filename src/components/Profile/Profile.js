import React, {useState} from 'react';
import Header from "../Header/Header";
import './Profile.css'
import { useAuth } from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const {user, signOut, setUserInfo} = useAuth();
  const [email, setEmail] = useState(user.email);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailErrorMassage, setIsEmailErrorMassage] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [nameErrorMassage, setIsNameErrorMassage] = useState('');
  const [name, setName] = useState(user.name);
  const navigate = useNavigate();

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value)
    validateEmail(evt.target)
  }

  const handleNameChange = (evt) => {
    setName(evt.target.value)
    validateName(evt.target)
  }

  const validateEmail = (input) => {
    if (!input.validity.valid) {
      setIsEmailValid(false);
      setIsEmailErrorMassage(input.validationMessage);
    } else {
      setIsEmailValid(true);
      setIsEmailErrorMassage(input.validationMessage);
    }
  }

  const validateName = (input) => {
    if (!input.validity.valid) {
      setIsNameValid(false);
      setIsNameErrorMassage(input.validationMessage);
    } else {
      setIsNameValid(true);
      setIsNameErrorMassage(input.validationMessage);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isNameValid && isEmailValid) {
      setUserInfo({email: email, name:name})
    }
  }

  const handleSignOut = () => {
    signOut(() => navigate('/', {replace: true}))
  }

  return (
    <>
      <Header isLoggedIn={true}  handleClick={ props.handlePopupOpen }/>
      <section className='profile'>
        <h1 className='profile__title'>Привет, {user.name}!</h1>
        <form onSubmit={handleSubmit} name='edit-profile' className='profile__form' noValidate>
          <div className='form__element'>
            <label className='form__label' htmlFor='name'>Имя</label>
            <input className='form__input' name='name' type="text" value={name} onChange={handleNameChange} minLength='2' maxLength='30' required/>
          </div>
          <span className='form__error'>{nameErrorMassage}</span>
          <div className='form__element'>
            <label className='form__label' htmlFor='email'>E-mail</label>
            <input className='form__input' name='email' type='email' value={email} onChange={handleEmailChange} required/>
          </div>
          <span className='form__error'>{emailErrorMassage}</span>
          <button type='submit' className={ `form__button ${isNameValid && isEmailValid ? '' : 'form__button_disable'}` }>Редактировать</button>
        </form>
        <button type='button' className='profile__exit' onClick={handleSignOut}>Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile
