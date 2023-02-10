// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { GalleryItem, Link, Image, Title, Reyt, Year, Genre, Name, Info} from './MoviesGallery.styled';
import noPoster from '../../img/unknown.jpg';

const MoviesGalleryItem = ({ path, src, alt, year, genres, reyt }) => {
  const location = useLocation();
let mapGenres = [];
const cut = (genres, index) => {if (index > 0 && index < 3 ) return ", "+genres; if (index === 0) return genres};
if (genres) {mapGenres = genres.map((genres, index) => cut(genres, index));};

  return (
    <GalleryItem>
    <Link to={path} state={{ from: location }}>
    <Image
        src={src ? `https://image.tmdb.org/t/p/w342${src}` : noPoster}
        alt={alt}
        loading="lazy"
      />
      {!src && <Name>{alt}</Name>}
      {/* <Info> */}
      <Title>
        <Year>{year}</Year>
        <Genre>{mapGenres && mapGenres}</Genre>
        {/* <Genre>{genres.map(genres => genres).join(', ')}</Genre> */}
        {reyt>0 && <Reyt>{reyt}</Reyt>}
      </Title>
      {/* </Info> */}
      </Link>  
    </GalleryItem>
  );
};

// ImageGalleryItem.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default MoviesGalleryItem;
