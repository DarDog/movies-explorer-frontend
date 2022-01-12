import React from 'react';
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";
import Tech from "../Tech/Tech";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import './Main.css'

const Main = () => {
  return (
    <>
      <div className="main__section">
        <Header isLoggedIn={false} />
        <Promo/>
        <NavTab/>
        <AboutProject/>
        <Tech/>
        <AboutMe/>
        <Portfolio/>
      </div>
      <Footer/>
    </>
  );
}

export default Main;
