import React from 'react';
import './SearchForm.css'

const SearchForm = () => {
  return(
    <section className="search main__search">
      <form className="search__form" name='search'>
        <input type="text" className="search__input" placeholder="Фильм"/>
        <button type="submit" className="search__submit">Найти</button>
      </form>
      <div className='search__switch-container'>
      <label className="search__switch">
        <input className="search__checkbox" type="checkbox"/>
        <span className="search__slider"/>
      </label>
      <p className='search__paragraph'>Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
