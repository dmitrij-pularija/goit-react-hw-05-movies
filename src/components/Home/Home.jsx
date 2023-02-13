import PropTypes from 'prop-types';
import { memo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PaginationBlock from '../PaginationBlock/PaginationBlock';
import MoviesGallery from '../MoviesGallery/MoviesGallery';
import Notification from '../Notification/Notification';
import { useQuery } from '../../services/hooks';

const Home = ({ genres }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getPage = Number(searchParams.get('page'));
  const [movies, setMovie] = useState([]);
  const [pages, setPages] = useState(0);
  const page = getPage ? getPage : 1;
  const {
    state: { loading, error },
    data,
    dataQuery,
  } = useQuery();

  useEffect(() => {
    dataQuery('trending', page, '');
  }, [page, dataQuery]);

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
        }))
      );
    }
  }, [data, genres]);

  const pagination = nextPage => {
    setMovie([]);
    setSearchParams({ page: nextPage });
  };
  
  return (
    <>
      {movies.length && !loading && <MoviesGallery movies={movies} />}
      {movies.length && !loading && (
        <PaginationBlock
          onPagination={pagination}
          total={pages}
          curent={page}
        />
      )}
      {!movies.length && !loading && (
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

Home.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default memo(Home);