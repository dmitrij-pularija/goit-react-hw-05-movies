// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { GalleryItem, Image, Title, Name, Character } from './CastItem.styled';

const CastItem = ({ id, src, name, character, personInfo }) => {
  const location = useLocation();
  return (
    <GalleryItem onClick={() => personInfo(id)} title="Сlick to view person information">
    {/* <Link to={path} state={{ from: location }}> */}
      <Image
        src={src}
        alt={name}
        loading="lazy"
      />
      <Title>
      <Name>{name}</Name>
      <Character>as {character}</Character>
      </Title>
      {/* </Link>   */}
    </GalleryItem>
  );
};

// ImageGalleryItem.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default CastItem;
