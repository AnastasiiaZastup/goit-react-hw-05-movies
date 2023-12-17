import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getTrendingMovies } from 'components/api';
import { List } from 'components/List/List';
import { Title } from './Home.styled';

export default function Home() {
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
      <Title>Trending today</Title>
      <List movies={movies} />
      <Toaster />
    </div>
  );
}
