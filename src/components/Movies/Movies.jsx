import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import MoviesGallery from '../MoviesGallery/MoviesGallery';
import Buttons from '../PaginationBlock/PaginationBlock';
import Notification from '../Notification/Notification';
import { memo, useState, useEffect } from 'react';
import { useQuery } from '../../services/hooks';
import Loader from '../Loader/Loader';

const Movies = ({ genres }) => {
  const [movies, setMovie] = useState([]);
  const [filter, setFilter] = useState('');
  const [pages, setPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const getPage = Number(searchParams.get('page'));
  const page = getPage ? getPage : 1;
  const {
    state: { loading, error },
    data,
    dataQuery,
  } = useQuery();

  useEffect(() => {
    if (search && search !== filter) {
      setFilter(search);
      setMovie([]);
      setPages(0);
    }
    filter && dataQuery('movies', page, filter);
  }, [page, filter, search, dataQuery]);

  useEffect(() => {
    const { results, total_pages } = data;
    if (total_pages) {
      const genresName = genre_ids =>
        genres.reduce((array, genre) => {
          genre_ids.includes(Number(genre.id)) && array.push(genre.name);
          return array;
        }, []);
      setPages(total_pages);
      setMovie(
        results.map(movie => ({
          id: movie.id,
          poster: movie.poster_path,
          title: movie.title,
          release_date: movie.release_date,
          genres: genresName(movie.genre_ids),
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
        }))
      );
    }
  }, [data, genres]);

  const pagination = nextPage => {
    setMovie([]);
    setSearchParams({ search: filter, page: nextPage });
  };

  return (
    <>
      {loading && <Loader />}
      {movies.length && !loading && <MoviesGallery movies={movies} />}
      {movies.length && !loading && (
        <Buttons onPagination={pagination} total={pages} curent={page} />
      )}
      {filter && !movies.length && !loading && (
        <Notification
          message={
            error
              ? 'Something went wrong, please try again.'
              : 'Movies not found'
          }
        />
      )}
    </>
  );
};

Movies.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default memo(Movies);