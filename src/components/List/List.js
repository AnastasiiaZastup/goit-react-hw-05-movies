import { Link, useLocation } from 'react-router-dom';
import { ListFilms, ItemFilms } from 'components/List/List.styled';

export const List = ({ movies }) => {
  const location = useLocation();

  return (
    <ListFilms>
      {movies.map(({ id, title }) => (
        <ItemFilms key={id}>
          <Link to={{ pathname: `/movies/${id}`, state: { location } }}>
            <h5>{title}</h5>
          </Link>
        </ItemFilms>
      ))}
    </ListFilms>
  );
};
