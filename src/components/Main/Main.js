import React from 'react';
import './Main.css'
import Promo from "../Promo/Promo";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";

const Main = () => {
  return (
    <>
      <section className="main__section">
        <Header/>
        <Promo/>
      </section>
      <NavBar/>
    </>
  );
}

export default Main;
