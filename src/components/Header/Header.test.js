import React from 'react';
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('Компонент Header', () => {
  it('Рендерится', () => {
    render(
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    );
    expect(screen.getByText(/Регистрация/)).toBeInTheDocument();
  })
  it('Соответствует своему snapshot', () => {
    const component = render(
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  })
})
