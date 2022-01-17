import React from 'react';
import './Popup.css';
import Navigation from "../Navigation/Navigation";

const Popup = ({isOpen, ...props}) => {
  return(
    <article className={ `popup ${isOpen ? 'popup_open' : ''}` }>
      <div className="popup__overlay">
        <div className="popup__container">
          <button onClick={props.onClose} type='button' className='popup__close-button'/>
          <Navigation isMobile={true}/>
        </div>
      </div>
    </article>
  );
}

export default Popup;
