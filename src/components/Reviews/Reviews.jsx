import { useEffect, memo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ReactComponent as Icon } from '../../img/back.svg';
import Notification from '../Notification/Notification';
import { Gallery, Back } from './ReviewsItem.styled';
import { useQuery } from '../../services/hooks';
import ReviewsItem from './ReviewsItem';

const Reviews = () => {
  let reviews = [];
  const { moviesId } = useParams();
  const location = useLocation();
  const {
    state: { loading, error },
    data: { results = [] },
    dataQuery,
  } = useQuery();

  useEffect(() => {
    dataQuery('reviews', 1, moviesId);
  }, [moviesId, dataQuery]);

  if (results) {
    reviews = results.sort(
      (firstReviews, secondReviews) =>
        new Date(secondReviews.updated_at) - new Date(firstReviews.updated_at)
    );
  }

  return (
    <>
      {loading && <Notification message={'Reviews loading...'} />}
      {reviews.length && !loading ? (
        <Gallery>
          {reviews.map(
            ({ id, author, content, created_at, author_details }) => (
              <ReviewsItem
                key={id}
                author={author}
                content={content}
                created={created_at}
                avatar={author_details.avatar_path}
              />
            )
          )}
        </Gallery>
      ) : (
        !loading && (
          <Notification
            message={
              error
                ? 'Something went wrong, please try again.'
                : 'Reviews not found'
            }
          />
        )
      )}
      <Back to={location?.state?.from ?? '/'} title="Сlick to back">
        <Icon fill="white" />
      </Back>
    </>
  );
};

export default memo(Reviews);