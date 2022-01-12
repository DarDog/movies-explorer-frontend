import React from 'react';
import Header from "../Header/Header";
import './Profile.css'

const Profile = () => {
  return (
    <>
      <Header isLoggedIn={true}/>
      <section className='profile'>
        <h1 className='profile__title'>Привет, Владислав!</h1>
        <form name='edit-profile' className='profile__form'>
          <div className='form__element'>
            <label className='form__label'>Имя</label>
            <input className='form__input' type="text" placeholder='Владислав'/>
          </div>
          <div className='form__element'>
            <label className='form__label'>E-mail</label>
            <input className='form__input' type='email' placeholder='mail@mail.com'/>
          </div>
          <button type='submit' className='form__button'>Редактировать</button>
        </form>
        <button type='button' className='profile__exit'>Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile
