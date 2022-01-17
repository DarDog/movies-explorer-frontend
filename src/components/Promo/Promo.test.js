import React from 'react';
import Promo from "./Promo";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('Компонент Promo',() => {
  it('Компонент рендерится', () => {
    render(<Promo/>);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/Учебный проект/)).toBeInTheDocument();
  })
  it('Соответствует своему snapshot', () => {
    const component =  render(<Promo/>);

    expect(component).toMatchSnapshot();
  })
})
