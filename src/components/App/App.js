import React from 'react';
import './App.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

function App () {
  return (
    <div className="page">
      <Header/>
      <main className="main">
        <SearchForm/>
      </main>
    </div>
  );
}

export default App;
