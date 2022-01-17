import React from 'react';
import MoviesCardList from "./MoviesCardList";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import movies from "../../utils/preparedFilms";

describe('Компонент MoviesCardList', () => {
  it('Рендерется', () => {
    render(<MoviesCardList movies={movies}/>)

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('Соответствует snapshot', () => {
    const component = render(
      <MoviesCardList movies={movies} />
    )

    expect(component).toMatchSnapshot();
  });
})
