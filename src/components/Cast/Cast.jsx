import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CastItem from './CastItem';
import { Gallery } from './CastItem.styled';
import noPhoto from '../../img/actor.jpg';
import { ReactComponent as Icon } from '../../img/back.svg';
import { Back } from '../Reviews/ReviewsItem.styled';
import Notification from '../Notification/Notification';
import Modal from '../Modal/Modal';
import PersonPage from '../PersonPage/PersonPage';
import { useQuery, useToggle } from '../../services/hooks';

const Cast = () => {
  const [personId, setId] = useState('');
  const { modalShow, modalToggle } = useToggle();
  const { moviesId } = useParams();
  const location = useLocation();
  const {
    state: { loading, error },
    data: { cast = [] },
    dataQuery,
  } = useQuery();

  useEffect(() => {
    dataQuery('credits', 1, moviesId);
  }, [moviesId, dataQuery]);

  const personInfo = id => {
    setId(id);
    modalToggle();
  };

  return (
    <>
      {loading && <Notification message={'Casts loading...'} />}
      {cast.length && !loading ? (
        <Gallery>
          {cast &&
            !loading &&
            cast.map(({ id, cast_id, character, name, profile_path }) => (
              <CastItem
                key={cast_id}
                id={id}
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w185' + profile_path
                    : noPhoto
                }
                name={name}
                character={character}
                personInfo={personInfo}
              />
            ))}
        </Gallery>
      ) : (
        !loading && (
          <Notification
            message={
              error
                ? 'Something went wrong, please try again.'
                : 'Cast not found'
            }
          />
        )
      )}

      <Back to={location?.state?.from ?? '/'} title="Сlick to back">
        <Icon fill="white" />
      </Back>
      {modalShow && (
        <Modal onClose={modalToggle}>
          <PersonPage personId={personId} />
        </Modal>
      )}
    </>
  );
};

export default Cast;