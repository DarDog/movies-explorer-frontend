import React from 'react';
import './Main.css'
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";

const Main = () => {
  return (
    <>
      <div className="main__section">
        <Header/>
        <Promo/>
        <NavTab/>
        <AboutProject/>
      </div>
    </>
  );
}

export default Main;
