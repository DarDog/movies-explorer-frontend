import React from 'react';
import './Main.css'
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import Header from "../Header/Header";

const Main = () => {
  return (
    <>
      <div className="main__section">
        <Header/>
        <Promo/>
        <NavTab/>

      </div>
    </>
  );
}

export default Main;
