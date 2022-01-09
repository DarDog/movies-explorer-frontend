import React from 'react';
import './Ul.css'

const Ul = (props) => {
  return(
    <ul className={ `list ${props.anotherClass || ''} ${props.isColumn ? 'list_type_column' : ''}` }>
      {props.children}
    </ul>
  );
}

export default Ul;
