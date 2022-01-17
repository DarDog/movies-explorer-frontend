import React from 'react';
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';


describe('Компонент Ul', () => {
  it('Рендерится', () => {
    render(<Footer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
  it('Соответствует своему snapshot', () => {
    const component = render(<Footer />);

    expect(component).toMatchSnapshot();
  })
})
