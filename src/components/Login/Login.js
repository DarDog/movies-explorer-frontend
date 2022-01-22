import React, {useState} from 'react';
import './Login.css'
import {useNavigate} from "react-router";
import {useAuth} from "../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailErrorMassage, setIsEmailErrorMassage] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordErrorMassage, setIsPasswordErrorMassage] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth();
  const navigate = useNavigate()

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value)
    validateEmail(evt.target)
  }

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value)
    validatePassword(evt.target)
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

  const validatePassword = (input) => {
    if (!input.validity.valid) {
      setIsPasswordValid(false);
      setIsPasswordErrorMassage(input.validationMessage);
    } else {
      setIsPasswordValid(true);
      setIsPasswordErrorMassage(input.validationMessage);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    signIn({email, password}, () => navigate('/movies', {replace: true}))
  }

  return(
    <form className='login' name='login' noValidate onSubmit={handleSubmit}>
      <div className="login__inputs">
        <label className='login__label'>E-mail</label>
        <input className={ `login__input ${!isEmailValid && 'login__input_status_error'}` } type="email" value={email} onChange={handleEmailChange} required/>
        <span className='login__error'>{emailErrorMassage}</span>
        <label className='login__label'>Пароль</label>
        <input className={ `login__input ${!isPasswordValid && 'login__input_status_error'}` } type="password" value={password} onChange={handlePasswordChange} minLength={8} maxLength={30} required/>
        <span className='login__error'>{passwordErrorMassage}</span>
      </div>
      <button className="login__submit">Войти</button>
    </form>
  );
}

export default Login;
