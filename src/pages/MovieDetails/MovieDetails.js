import { getMovieById } from 'components/api';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { DivMov } from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await getMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        toast.error('Oops! Something went wrong.');
      }
    };
    fetchMovieData();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink}>Go back!</Link>
      {movie && (
        <DivMov>
          <img
            src={`${
              movie.poster_path
                ? 'https://image.tmdb.org/t/p/w500/' + movie.poster_path
                : 'https://via.placeholder.com/182x273?text=' +
                  movie.original_title
            }`}
            alt={movie.original_title}
          />
          <div>
            <h2>{movie.original_title}</h2>
            <h3>User score: {Math.round(movie.vote_average) * 10}%</h3>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres?.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </DivMov>
      )}

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
      <Toaster />
    </div>
  );
}
