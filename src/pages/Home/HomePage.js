import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getTrendingMovies } from 'components/api';
import { List } from 'components/List/List';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setMovies(response ?? []);
      } catch (error) {
        toast.error('Error!');
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <List movies={movies} />
      <Toaster />
    </div>
  );
}
