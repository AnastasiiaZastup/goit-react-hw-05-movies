import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const List = ({ movies }) => {
  const { pathname } = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link state={{ from: pathname }} to={`/movies/${id}`}>
            <h5>{title}</h5>
          </Link>
        </li>
      ))}
    </ul>
  );
};
