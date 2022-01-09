import React from 'react';
import AboutProject from "./AboutProject";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('Компонент AboutProject', () => {
  it('Рендерится', () => {
    render(<AboutProject />);

    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
    expect(screen.getByText('О проекте')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', {level: 3})).toHaveLength(2);
  })
  it('Соответствует своему snapshot', () => {
    const component = render(<AboutProject />);

    expect(component).toMatchSnapshot();
  })
})
