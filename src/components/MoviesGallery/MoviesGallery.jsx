// import PropTypes from 'prop-types';
import MoviesGalleryItem from './MoviesGalleryItem';
import { Gallery } from './MoviesGallery.styled';

const MoviesGallery = ({ movies }) => {
  return (
    <Gallery>
      {movies.map(({ id, poster, title, release_date, genres, vote_average }) => (
        <MoviesGalleryItem
          key={id}
          path={"/movies/"+id}
          // src={"https://image.tmdb.org/t/p/w300"+poster}
          src={poster}
          alt={title}
          year={release_date ? release_date.substr(0, 4) : "    "}
          genres={genres}
          reyt={vote_average.toFixed(1)}
          // onClick={onClick}
        />
      ))}
    </Gallery>
  );
};

// ImageGallery.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       poster: PropTypes.string,
//       title: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default MoviesGallery;