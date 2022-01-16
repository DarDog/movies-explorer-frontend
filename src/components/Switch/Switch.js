import React, { useState } from 'react';
import './Switch.css';

const Switch = () => {
  const [isShorts, setIsShorts] = useState(false);
  //ToDo Перенести стэйт короткометражек в вышестоящий компонент когда буду писать скрипты

  const handleSwitchChange = (evt) => {
    setIsShorts(evt.target.checked)
  }

  return(
    <div className='search__switch-container'>
      <label className="search__switch">
        <input className="search__checkbox" type="checkbox" onChange={handleSwitchChange} checked={isShorts}/>
        <span className="search__slider"/>
      </label>
      <p className='search__paragraph'>Короткометражки</p>
    </div>
  );
}

export default Switch;
