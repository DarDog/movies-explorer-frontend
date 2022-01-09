import React from 'react';
import RowDirectionUl from "./RowDirectionUl";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

const string = 'qwerty';

const children = () => {
  return(
    <li>qwerty</li>
  );
};

describe('Компонент SectionTitle', () => {
  it('Рендерится', () => {
    render(<RowDirectionUl>{ children() }</RowDirectionUl>);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(string)).toBeInTheDocument();
  })
  it('Соответствует своему snapshot', () => {
    const component = render(<RowDirectionUl>{ children() }</RowDirectionUl>);

    expect(component).toMatchSnapshot();
  })
})
