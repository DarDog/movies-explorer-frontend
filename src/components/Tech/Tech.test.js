import React from 'react';
import Tech from "./Tech";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';


describe('Компонент Tech', () => {
  it('Рендерится', () => {
    render(<Tech/>);

    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
    expect(screen.getByText('Технологии')).toBeInTheDocument();
    expect(screen.getByRole('heading', {level: 3})).toBeInTheDocument();
    expect(screen.getByText('7 технологий')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(7);
  })
  it('Соответствует своему snapshot', () => {
    const component = render(<Tech/>);

    expect(component).toMatchSnapshot();
  })
})
