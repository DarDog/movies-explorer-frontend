import React from 'react';
import AboutMe from "./AboutMe";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';


describe('Компонент Tech', () => {
  it('Рендерится', () => {
    render(<AboutMe/>);

    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
    expect(screen.getByText('Студент')).toBeInTheDocument();
    expect(screen.getByRole('heading', {level: 3})).toBeInTheDocument();
    expect(screen.getByText('Владислав')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('list')).toHaveLength(2);
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
    expect(screen.getAllByRole('link')).toHaveLength(5);
  })
  it('Соответствует своему snapshot', () => {
    const component = render(<AboutMe/>);

    expect(component).toMatchSnapshot();
  })
})
