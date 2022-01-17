import React from 'react';
import Register from "./Register";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('Компонент Register',() => {
  it('Компонент рендерится', () => {
    render(
      <BrowserRouter>
        <Register/>
      </BrowserRouter>
    );

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(2);
    expect(screen.getByRole('button')).toBeInTheDocument();
  })
  it('Соответствует своему snapshot', () => {
    const component =  render(
      <BrowserRouter>
        <Register/>
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  })
})
