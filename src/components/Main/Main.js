import React from 'react';
import './Main.css'
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";
import Tech from "../Tech/Tech";

const Main = () => {
  return (
    <>
      <div className="main__section">
        <Header/>
        <Promo/>
        <NavTab/>
        <AboutProject/>
        <Tech/>
      </div>
    </>
  );
}

export default Main;
