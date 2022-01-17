import React from 'react';
import LoadMore from "./LoadMore";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import movies from "../../utils/preparedFilms";

describe('Компонент LoadMore', () => {
  it('Рендерется', () => {
    render(<LoadMore movies={movies}/>)

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Соответствует snapshot', () => {
    const component = render(
      <LoadMore movies={movies} />
    )

    expect(component).toMatchSnapshot();
  });
})
