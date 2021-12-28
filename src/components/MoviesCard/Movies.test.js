import React from 'react';
import MoviesCard from "./MoviesCard";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import movies from "../../utils/preparedFilms";

describe('Компонент MoviesCard', () => {
  it('Рендерется', () => {
    render(<MoviesCard  movie={movies[0]} />);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('Соответствует Snapshot', () => {
    const component = render(
      <MoviesCard movie={movies}/>
    )

    expect(component).toMatchSnapshot();
  });
})
