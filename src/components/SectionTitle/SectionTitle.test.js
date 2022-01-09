import React from 'react';
import SectionTitle from "./SectionTitle";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

const string = 'qwerty';

describe('Компонент SectionTitle', () => {
  it('Рендерится', () => {
    render(<SectionTitle>{ string }</SectionTitle>);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(string)).toBeInTheDocument();
  })
  it('Соответствует своему snapshot', () => {
    const component = render(<SectionTitle>{ string }</SectionTitle>);

    expect(component).toMatchSnapshot();
  })
})
