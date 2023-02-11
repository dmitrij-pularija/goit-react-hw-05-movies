import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import getMovies from '../../services/Api';
import CastItem from './CastItem';
// import Loader from '../Loader/Loader';
import { Gallery } from './CastItem.styled';
import noPhoto from '../../img/actor.jpg';
import { ReactComponent as Icon } from '../../img/back.svg';
import { Back } from '../Reviews/ReviewsItem.styled';
import Notification from '../Notification/Notification';
import Modal from '../Modal/Modal';
import PersonPage from '../PersonPage/PersonPage';

const Cast = () => {
  const [movies, setMovie] = useState([]);
  // const [person, setPerson] = useState([]);
  const [personId, setId] = useState('');
  const [state, setState] = useState({
    modalShow: false,
    loading: false,
    error: false,
  });

  let { moviesId } = useParams();

  useEffect(() => {
    setState(prevState => {
      return { ...prevState, loading: true };
    });

    getMovies('credits', 1, moviesId)
      .then(results => setMovie(results.cast))
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

  // useEffect(() => {
  //   if (personId) {
  //     setState(prevState => {
  //       return { ...prevState, loading: true };
  //     });

  //     getMovies('person', 1, personId)
  //       .then(results => setPerson(results))
  //       .catch(() => {
  //         setState(prevState => {
  //           return { ...prevState, error: true };
  //         });
  //       })
  //       .finally(() =>
  //         setState(prevState => {
  //           return { ...prevState, loading: false };
  //         })
  //       );
  //   }
  // }, [personId]);

  const personInfo = id => {
    setId(id);
    modalToggle();
  };
  const modalToggle = () => {
    document.querySelector('body').classList.toggle('no-scroll');
    if (modalShow) {
      setId('');
      // setPerson([]);
    }
    setState(prevState => {
      return { ...prevState, modalShow: !prevState.modalShow };
    });
  };

  const { modalShow, loading, error } = state;
  const location = useLocation();
  console.log(movies);

  return (
    <>
      {loading && <Notification message={'Casts loading...'}/>}
      {movies.length && !loading ? (
        <Gallery>
          {movies.map(({ id, cast_id, character, name, profile_path }) => (
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
      ) : (!loading && 
        <Notification
          message={
            error ? 'Something went wrong, please try again.' : 'Cast not found'
          }
        />
      )}
      <Back to={location.state.from} title="Сlick to back">
        <Icon fill="white" />
      </Back>
      {modalShow && (
        <Modal onClose={modalToggle}>
          <PersonPage personId={personId}/>
          {/* <PersonPage person={person} /> */}
        </Modal>
      )}
    </>
  );
};

export default Cast;