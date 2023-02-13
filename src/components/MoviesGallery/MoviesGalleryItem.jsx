import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  GalleryItem,
  Url,
  Image,
  Title,
  Reyt,
  Year,
  Genre,
  Name,
} from './MoviesGallery.styled';
import noPoster from '../../img/unknown.jpg';

const MoviesGalleryItem = ({ path, src, alt, year, genres, reyt }) => {
  const location = useLocation();
  let mapGenres = [];
  const cut = (genres, index) => {
    if (index > 0 && index < 3) return ', ' + genres;
    if (index === 0) return genres;
  };
  if (genres) {
    mapGenres = genres.map((genres, index) => cut(genres, index));
  }

  return (
    <GalleryItem>
      <Url to={path} state={{ from: location }}>
        <Image
          src={src ? `https://image.tmdb.org/t/p/w342${src}` : noPoster}
          alt={alt}
          loading="lazy"
        />
        {!src && <Name>{alt}</Name>}
        <Title>
          <Year>{year}</Year>
          <Genre>{mapGenres && mapGenres}</Genre>
          {reyt > 0 && <Reyt>{reyt}</Reyt>}
        </Title>
      </Url>
    </GalleryItem>
  );
};

MoviesGalleryItem.propTypes = {
  path: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  year: PropTypes.string,
  reyt: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default MoviesGalleryItem;