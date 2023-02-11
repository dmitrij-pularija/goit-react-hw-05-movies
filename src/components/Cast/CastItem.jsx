import PropTypes from 'prop-types';
import { GalleryItem, Image, Title, Name, Character } from './CastItem.styled';

const CastItem = ({ id, src, name, character, personInfo }) => {
  return (
    <GalleryItem
      onClick={() => personInfo(id)}
      title="Сlick to view person information"
    >
      <Image src={src} alt={name} loading="lazy" />
      <Title>
        <Name>{name}</Name>
        <Character>as {character}</Character>
      </Title>
    </GalleryItem>
  );
};

CastItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  personInfo: PropTypes.func.isRequired,
};

export default CastItem;