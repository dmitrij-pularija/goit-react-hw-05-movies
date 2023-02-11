import getData from '../../services/Api';
import { useState, useEffect } from 'react';
import { lazy } from 'react';

import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { ReactComponent as IconClose } from '../../img/clear.svg';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import Notification from '../Notification/Notification';
// import Trailer from '../Trailer/Trailer';
import Modal from '../Modal/Modal';

import noPoster from '../../img/unknown.jpg';
import { ReactComponent as IconPlay } from '../../img/play.svg';
import { CardDetails, Poster, MovieInfo, Overview, Link, Close , Main, Add, Name, List, Item, Param, Value, Vote, Url, Play, Image } from './MovieDetails.styled';
const Trailer = lazy(() => import('../Trailer/Trailer'));


const MovieDetails = () => {
  const [movies, setMovie] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [state, setState] = useState({ modalShow: false, loading: false, error: false});
  let { moviesId } = useParams();
  const location = useLocation();
  // const playTrailer = () =>  setState(prevState => {
  //   return { ...prevState, play: true };

  // });

// const resFilterd = (res) => res.filter(type => type==="Trailer");
   useEffect(() => {
    setState(prevState => {
      return { ...prevState, loading: true };
    });


    getData('details', 1, moviesId)
          .then( results => 
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

          getData('trailer', 1, moviesId)
          .then(({results}) => 
          setTrailer(results.filter(res => res.type === "Trailer" && res.site === "YouTube"))
          )
          .catch(() => setTrailer([]))
      }, [moviesId]);

      const modalToggle = () => {
        document.querySelector('body').classList.toggle('no-scroll');
        // if (modalShow) {setId(''); setPerson([]);};
        setState(prevState => {
          return { ...prevState, modalShow: !prevState.modalShow };
        });
            };

console.log(movies);
console.log("trailer", trailer);

let mapGenres = [];
let mapContries = [];

const { loading, error, modalShow } = state;
console.log(loading, error);
const { release_date, title, budget, runtime, homepage, vote_average, vote_count, popularity, overview, genres, poster_path, production_countries } = movies;
const releaseData = new Date(release_date);
if (genres) {mapGenres = genres.map(genres => genres.name).join(', ');};
if (production_countries) {mapContries = production_countries.map(countrie => countrie.name).join(', ');};
const locationFrom = location?.state?.from ?? '/';
    return (
      <>
      {!loading && 
      <CardDetails>
        <Close to={locationFrom} title="Сlick to back"><IconClose  stroke='currentColor' /></Close>
        {!error  ? (
        <Main>
          <Poster>
        <Image 
          src={poster_path ? "https://image.tmdb.org/t/p/w342"+poster_path : noPoster}
          alt={title}
        />
        {trailer.length ? <Play onClick={modalToggle}><IconPlay  fill='white' /></Play> : ''}
        </Poster>
        <MovieInfo>
        <Name>{title}</Name>
        <List>
        {vote_average ? <Item><Param> Vote / Votes</Param><Value><Vote>{vote_average.toFixed(1)}</Vote> / {vote_count}</Value></Item> : ''}
        {popularity ? <Item><Param>Popularity</Param><Value>{popularity.toFixed(2)}</Value></Item> : ''}
        {runtime ? <Item><Param>Rruntime</Param><Value>{Math.floor(runtime / 60)}h {runtime - (Math.floor(runtime/60)*60)}m</Value></Item> : ''}
        {budget ? <Item><Param>Budget</Param><Value>${(budget/1000000).toFixed(2)} millions</Value></Item> : ''}
        {release_date && <Item><Param>Release date</Param><Value>{releaseData.toLocaleDateString()}</Value></Item>}
        {mapGenres && <Item><Param>Genres</Param><Value>{mapGenres}</Value></Item>}
        {mapContries && <Item><Param>Countries</Param><Value>{mapContries}</Value></Item>}
        {/* {genres && <Item><Param>Genres</Param><Value>{genres.map(genres => genres.name).join(', ')}</Value></Item>} */}
        {/* {production_countries && <Item><Param>Countries</Param><Value>{production_countries.map(countrie => countrie.name).join(', ')}</Value></Item>} */}
        </List>
        <Link to={`/movies/${moviesId}/cast`} state={{ from: `/movies/${moviesId}` }}> Cast ›</Link>
        {homepage && <Url><b>Home page: </b><a href={homepage} >{homepage}</a></Url>}
        {overview && <Overview><b>About: </b>{overview}</Overview>}
        <Link to={`/movies/${moviesId}/reviews`} state={{ from: `/movies/${moviesId}` }}> Reviews ›</Link>
        </MovieInfo>
        </Main>
      ) : (<Notification
  message={
    error
      ? 'Something went wrong, please try again.'
      : 'Movie details not found'
  }
  />)}
          <Add>
        {/* <Suspense fallback={<Loader />}> */}
        <Outlet />
        {/* </Suspense> */}
      </Add>
      </CardDetails>
}
{modalShow && (
        <Modal onClose={modalToggle}>
      <Suspense fallback={<Loader />}>
          <Trailer src={trailer[0].key}/>
      </Suspense> 
        </Modal>
      )}
</>
    );
  };

export default MovieDetails;