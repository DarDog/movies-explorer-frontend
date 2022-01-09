import React from 'react';
import Ul from "./Ul";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

const string = 'qwerty';

const children = () => {
  return(
    <li>qwerty</li>
  );
};

describe('Компонент Ul', () => {
  it('Рендерится', () => {
    render(<Ul>{ children() }</Ul>);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(string)).toBeInTheDocument();
  })
  it('Соответствует своему snapshot', () => {
    const component = render(<Ul>{ children() }</Ul>);

    expect(component).toMatchSnapshot();
  })
})
