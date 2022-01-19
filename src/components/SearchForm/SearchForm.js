import React, {useState} from 'react';
import './SearchForm.css'
import Switch from "../Switch/Switch";

const SearchForm = ({moviesRegistry, ...props}) => {
  const [keyWord, setKeyWord] = useState('');

  const handleChangeSearchInput = (evt) => {
    setKeyWord(evt.target.value);
  }

  const handleSubmit = (keyWord) => {
    props.setFoundMovies(moviesRegistry.filter(movie => movie.nameRU))
    // moviesRegistry
  }

  return (
    <section className="search main__search">
      <form className="search__form" name='search' onSubmit={handleSubmit}>
        <input type="text" className="search__input" placeholder="Фильм" required value={keyWord} onChange={handleChangeSearchInput}/>
        <button type="submit" className="search__submit">Найти</button>
      </form>
      <Switch/>
      <div className='search__border'/>
    </section>
  );
}

export default SearchForm;
