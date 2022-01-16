import React from 'react';
import './SearchForm.css'
import Switch from "../Switch/Switch";

const SearchForm = () => {
  return (
    <section className="search main__search">
      <form className="search__form" name='search'>
        <input type="text" className="search__input" placeholder="Фильм"/>
        <button type="submit" className="search__submit">Найти</button>
      </form>
      <Switch/>
      <div className='search__border'/>
    </section>
  );
}

export default SearchForm;
