import React from 'react';
import Login from "./Login";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('Компонент Login',() => {
  it('Компонент рендерится', () => {
    render(
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    );

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('input')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  })
  it('Соответствует своему snapshot', () => {
    const component =  render(
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  })
})
