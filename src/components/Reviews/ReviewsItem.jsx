import PropTypes from 'prop-types';
import { GalleryItem, Info, Content, Image } from './ReviewsItem.styled';
import noPhoto from '../../img/actor.jpg';

const ReviewsItem = ({ author, content, created, avatar }) => {
  const reviewsData = new Date(created);
  return (
    <GalleryItem>
      <Info>
        <Image
          src={
            !avatar
              ? noPhoto
              : avatar.includes('http')
              ? avatar.replace('/http', 'http')
              : 'https://image.tmdb.org/t/p/w342' + avatar
          }
          alt={author}
          loading="lazy"
        />
        <span>{author}</span>
        <span>{reviewsData.toLocaleDateString()}</span>
      </Info>
      <Content>{content}</Content>
    </GalleryItem>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default ReviewsItem;