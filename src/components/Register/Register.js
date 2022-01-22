import React, {useState} from 'react';
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import './Register.css'

const Register = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailErrorMassage, setIsEmailErrorMassage] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [nameErrorMassage, setIsNameErrorMassage] = useState('');
  const [name, setName] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordErrorMassage, setIsPasswordErrorMassage] = useState('');
  const [password, setPassword] = useState('');
  const {signUp} = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value)
    validateEmail(evt.target)
  }

  const handleNameChange = (evt) => {
    setName(evt.target.value)
    validateName(evt.target)
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

  const validateName = (input) => {
    if (!input.validity.valid) {
      setIsNameValid(false);
      setIsNameErrorMassage(input.validationMessage);
    } else {
      setIsNameValid(true);
      setIsNameErrorMassage(input.validationMessage);
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
    signUp({email, name, password}, () => navigate('/movies', {replace: true}))
  }

  return (
    <form className='register' name='register' noValidate onSubmit={handleSubmit}>
      <div className="register__inputs">
        <label className='register__label'>Имя</label>
        <input className={ `register__input ${!isNameValid && 'register__input_status_error'}` } type="text" required onChange={handleNameChange} value={name} minLength={2} maxLength={30}/>
        <span className='register__error'>{nameErrorMassage}</span>
        <label className='register__label'>E-mail</label>
        <input className={ `register__input ${!isEmailValid && 'register__input_status_error'}` } type="email" required onChange={handleEmailChange} value={email}/>
        <span className='register__error'>{emailErrorMassage}</span>
        <label className='register__label'>Пароль</label>
        <input className={ `register__input ${!isPasswordValid && 'register__input_status_error'}` } type="password" required onChange={handlePasswordChange} value={password} minLength={8} maxLength={30}/>
        <span className='register__error'>{passwordErrorMassage}</span>
      </div>
      <button className="register__submit">Зарегистрироваться</button>
    </form>
  );
}

export default Register;
