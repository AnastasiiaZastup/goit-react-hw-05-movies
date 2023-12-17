import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { getCastMovie } from '../api';

import { StyledList, ListItem, StyledSecondaryText } from './Cast.styled';

export const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const { cast } = await getCastMovie(movieId);
        setCast([...cast]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {error && (
        <StyledSecondaryText>Oops, something went wrong.</StyledSecondaryText>
      )}
      {isLoading && <StyledSecondaryText>Loading...</StyledSecondaryText>}

      {cast.length > 0 && (
        <div>
          <StyledList>
            {cast.map(({ id, profile_path, original_name, character }) => (
              <ListItem key={id}>
                <img
                  src={`${
                    profile_path
                      ? 'https://image.tmdb.org/t/p/w500/' + profile_path
                      : 'https://via.placeholder.com/182x273?text=' +
                        original_name
                  }`}
                  alt={original_name}
                />
                <p>
                  <span>Actor:</span> {original_name}
                </p>
                <p>
                  <span>Character:</span> {character}
                </p>
              </ListItem>
            ))}
          </StyledList>
          <Toaster />
        </div>
      )}
    </>
  );
};
