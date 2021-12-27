import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Movies from "../Movies/Movies";

function App () {
  return (
    <div className="page">
      <Header/>
      <main className="main">
        <Movies />
      </main>
    </div>
  );
}

export default App;
