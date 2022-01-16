import React, {useState} from 'react';
import './SearchForm.css'
import Switch from "../Switch/Switch";

const SearchForm = () => {
  const [movie, setMovie] = useState('');

  const handleChangeSearchInput = (evt) => {
    setMovie(evt.target.value);
  }

  return (
    <section className="search main__search">
      <form className="search__form" name='search'>
        <input type="text" className="search__input" placeholder="Фильм" required value={movie} onChange={handleChangeSearchInput}/>
        <button type="submit" className="search__submit">Найти</button>
      </form>
      <Switch/>
      <div className='search__border'/>
    </section>
  );
}

export default SearchForm;
