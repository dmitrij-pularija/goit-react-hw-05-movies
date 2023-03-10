import { lazy, useEffect } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { useQuery } from '../services/hooks';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  const {
    data: { genres = [] },
    dataQuery,
  } = useQuery();

  useEffect(() => {
    dataQuery('genres', 1, '');
  }, [dataQuery]);
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home genres={genres} />} />
          <Route path="movies" element={<Movies genres={genres} />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;