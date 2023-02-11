import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ReactComponent as Icon } from '../../img/back.svg';
import getData from '../../services/Api';
import Notification from '../Notification/Notification';
// import Loader from '../Loader/Loader';
import ReviewsItem from './ReviewsItem';
import { Gallery, Back } from './ReviewsItem.styled';

const Reviews = () => {
  const [movies, setMovie] = useState([]);
  const [state, setState] = useState({ loading: false, error: false });
  let { moviesId } = useParams();

  useEffect(() => {
    setState(prevState => {
      return { ...prevState, loading: true };
    });

    getData('reviews', 1, moviesId)
          .then(({ results }) => 
            setMovie(results)
          )
          .catch(() => {
            setState(prevState => {
              return { ...prevState, error: true };
            });
          })
          .finally(() =>
            setState(prevState => {
              return { ...prevState, loading: false };
            })
          );

      }, [moviesId]);

  const { loading, error } = state;
  const location = useLocation();
  let reviews = [];
  if (movies) {reviews = movies.sort((firstReviews, secondReviews) => new Date(secondReviews.updated_at) - new Date(firstReviews.updated_at));};
console.log(location);
    return (
      <>
      {loading && <Notification message={'Reviews loading...'}/>}
      {movies.length && !loading ? (
      <Gallery>
      {movies && reviews.map(({ id, author, content, created_at, author_details }) => (
        <ReviewsItem
          key={id}
          author={author}
          content={content}
          created={created_at}
          avatar={author_details.avatar_path}
        />
      ))}
    </Gallery>
       ) : (!loading && <Notification
  message={
    error
      ? 'Something went wrong, please try again.'
      : 'Reviews not found'
  }
  />)}
<Back to={location.state.from} title="Сlick to back"><Icon fill='white' /></Back>
  </>
    );
  };

export default Reviews;