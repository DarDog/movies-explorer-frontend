import React, { useState } from 'react';
import './Switch.css';

const Switch = ({isShorts, setIsShorts}) => {
  const handleSwitchChange = (evt) => {
    setIsShorts(evt.target.checked)
    localStorage.setItem('isShort', evt.target.checked)
  }

  return(
    <div className='switch'>
      <label className="switch__container">
        <input className="switch__checkbox" type="checkbox" onChange={handleSwitchChange} checked={isShorts}/>
        <span className="switch__slider"/>
      </label>
      <p className='switch__paragraph'>Короткометражки</p>
    </div>
  );
}

export default Switch;
