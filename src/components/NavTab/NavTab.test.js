import React from 'react';
import NavTab from "./NavTab";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('Компонент NavTab',() => {
  it('Компонент рендерится', () => {
    render(
      <BrowserRouter>
        <NavTab/>
      </BrowserRouter>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
  })
  it('Соответствует своему snapshot', () => {
    const component =  render(
      <BrowserRouter>
        <NavTab/>
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  })
})
