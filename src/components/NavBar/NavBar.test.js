import React from 'react';
import NavBar from "./NavBar";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('Компонент NavBar',() => {
  it('Компонент рендерится', () => {
    render(
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
  })
  it('Соответствует своему snapshot', () => {
    const component =  render(
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  })
})
