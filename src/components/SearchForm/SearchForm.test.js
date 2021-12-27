import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchForm from "./SearchForm";
import '@testing-library/jest-dom';

describe('Компонент SearchForm', () => {
  it('Рендерится', () => {
    render(
      <SearchForm />
    );

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Найти')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Короткометражки')).toBeInTheDocument();
  })
  it('соответствует Snapshot',  () => {
    const component = render(
      <SearchForm />
    );

    expect(component).toMatchSnapshot();
  });
})
