import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('Компонент Navigation', () => {
  it('Рендерится', () => {
    render(
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText(/Фильмы/)).toBeInTheDocument();
  })
  it('Соответствует своему Snapshot', () => {
    const component = render(
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>)

    expect(component).toMatchSnapshot();
  })
})
