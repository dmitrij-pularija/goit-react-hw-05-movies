import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGallery.styled';

const ImageGalleryItem = ({ onClick, src, modalUrl, modalAlt }) => {
  return (
    <GalleryItem>
      <Image
        src={src}
        alt={modalAlt}
        onClick={() => onClick(modalUrl, modalAlt)}
        loading="lazy"
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  modalUrl: PropTypes.string.isRequired,
  modalAlt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
