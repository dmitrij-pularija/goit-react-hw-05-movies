import PropTypes from 'prop-types';
import MoviesGalleryItem from './MoviesGalleryItem';
import { Gallery } from './MoviesGallery.styled';

const MoviesGallery = ({ movies }) => {
  return (
    <Gallery>
      {movies.map(
        ({ id, poster, title, release_date, genres, vote_average }) => (
          <MoviesGalleryItem
            key={id}
            path={'/movies/' + id}
            src={poster}
            alt={title}
            year={release_date ? release_date.substr(0, 4) : '    '}
            genres={genres}
            reyt={vote_average.toFixed(1)}
          />
        )
      )}
    </Gallery>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};
export default MoviesGallery;