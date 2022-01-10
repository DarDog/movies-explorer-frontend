import React from 'react';
import './Main.css'
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";
import Tech from "../Tech/Tech";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <div className="main__section">
        <Header/>
        <Promo/>
        <NavTab/>
        <AboutProject/>
        <Tech/>
        <AboutMe/>
      </div>
      <Footer/>
    </>
  );
}

export default Main;
