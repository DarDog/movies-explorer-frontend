import React from 'react';
import './RowDirectionUl.css'

const RowDirectionUl = (props) => {
  return(
    <ul className={ `${props.anotherClass || ''} list` }>
      {props.children}
    </ul>
  );
}

export default RowDirectionUl;
