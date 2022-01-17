import React from 'react';
import './SectionTitle.css'

const SectionTitle = (props) => {
  return(
    <h2 className='title'>{props.children}</h2>
  );
}

export default SectionTitle;
