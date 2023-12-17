import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Lists, ItemFilms } from 'components/List/List.styled';

export const List = ({ movies }) => {
  const { pathname } = useLocation();
  return (
    <Lists>
      {movies.map(({ id, title }) => (
        <ItemFilms key={id}>
          <Link state={{ from: pathname }} to={`/movies/${id}`}>
            <h5>{title}</h5>
          </Link>
        </ItemFilms>
      ))}
    </Lists>
  );
};
