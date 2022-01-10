import React from 'react';
import Profile from "./Profile";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('Компонент Profile', () => {
  it('Компонент рендерится', () => {
    render(
      <BrowserRouter>
        <Profile/>
      </BrowserRouter>
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(2);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  })
  it('Соответствует своему snapshot', () => {
    const component = render(
      <BrowserRouter>
        <Profile/>
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  })
})
