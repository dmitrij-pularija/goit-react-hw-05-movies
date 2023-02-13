import { lazy, Suspense } from 'react';
import { memo, useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { ReactComponent as IconClose } from '../../img/clear.svg';
import { ReactComponent as IconPlay } from '../../img/play.svg';
import { useQuery, useToggle } from '../../services/hooks';
import Notification from '../Notification/Notification';
import noPoster from '../../img/unknown.jpg';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import {
  CardDetails,
  Poster,
  MovieInfo,
  Overview,
  Link,
  Close,
  Main,
  Add,
  Name,
  List,
  Item,
  Param,
  Value,
  Vote,
  Url,
  Play,
  Image,
} from './MovieDetails.styled';

const Trailer = lazy(() => import('../Trailer/Trailer'));

const MovieDetails = () => {
  let mapGenres = [];
  let mapContries = [];
  const { modalShow, modalToggle } = useToggle();
  const [from, setFrom] = useState('');
  const { moviesId } = useParams();
  const location = useLocation();
  const {
    state: { loading, error },
    data,
    dataQuery,
  } = useQuery();

  if (!from) {
    const { pathname, search } = location.state.from;
    setFrom(pathname + search);
  }

  useEffect(() => {
    dataQuery('details', 1, moviesId);
  }, [moviesId, dataQuery]);

  const {
    release_date,
    title,
    budget,
    runtime,
    homepage,
    vote_average,
    vote_count,
    popularity,
    overview,
    genres,
    poster_path,
    production_countries,
  } = data;
  const releaseData = new Date(release_date);
  if (genres) {
    mapGenres = genres.map(genres => genres.name).join(', ');
  }
  if (production_countries) {
    mapContries = production_countries
      .map(countrie => countrie.name)
      .join(', ');
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <CardDetails>
          <Close to={from} title="Сlick to back">
            <IconClose stroke="currentColor" />
          </Close>
          {!error ? (
            <Main>
              <Poster>
                <Image
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w342' + poster_path
                      : noPoster
                  }
                  alt={title}
                />
                <Play onClick={modalToggle}>
                  <IconPlay fill="white" />
                </Play>
              </Poster>
              <MovieInfo>
                <Name>{title}</Name>
                <List>
                  {vote_average ? (
                    <Item>
                      <Param> Vote / Votes</Param>
                      <Value>
                        <Vote>{vote_average.toFixed(1)}</Vote> / {vote_count}
                      </Value>
                    </Item>
                  ) : (
                    ''
                  )}
                  {popularity ? (
                    <Item>
                      <Param>Popularity</Param>
                      <Value>{popularity.toFixed(2)}</Value>
                    </Item>
                  ) : (
                    ''
                  )}
                  {runtime ? (
                    <Item>
                      <Param>Rruntime</Param>
                      <Value>
                        {Math.floor(runtime / 60)}h{' '}
                        {runtime - Math.floor(runtime / 60) * 60}m
                      </Value>
                    </Item>
                  ) : (
                    ''
                  )}
                  {budget ? (
                    <Item>
                      <Param>Budget</Param>
                      <Value>${(budget / 1000000).toFixed(2)} millions</Value>
                    </Item>
                  ) : (
                    ''
                  )}
                  {release_date && (
                    <Item>
                      <Param>Release date</Param>
                      <Value>{releaseData.toLocaleDateString()}</Value>
                    </Item>
                  )}
                  {mapGenres && (
                    <Item>
                      <Param>Genres</Param>
                      <Value>{mapGenres}</Value>
                    </Item>
                  )}
                  {mapContries && (
                    <Item>
                      <Param>Countries</Param>
                      <Value>{mapContries}</Value>
                    </Item>
                  )}
                </List>
                <Link
                  to={`/movies/${moviesId}/cast`}
                  state={{ from: `/movies/${moviesId}` }}
                >
                  {' '}
                  Cast ›
                </Link>
                {homepage && (
                  <Url>
                    <b>Home page: </b>
                    <a href={homepage}>{homepage}</a>
                  </Url>
                )}
                {overview && (
                  <Overview>
                    <b>About: </b>
                    {overview}
                  </Overview>
                )}
                <Link
                  to={`/movies/${moviesId}/reviews`}
                  state={{ from: `/movies/${moviesId}` }}
                >
                  {' '}
                  Reviews ›
                </Link>
              </MovieInfo>
            </Main>
          ) : (
            <Notification
              message={
                error
                  ? 'Something went wrong, please try again.'
                  : 'Movie details not found'
              }
            />
          )}
          <Add>
            <Outlet />
          </Add>
        </CardDetails>
      )}
      {modalShow && (
        <Modal onClose={modalToggle}>
          <Suspense fallback={<Loader />}>
            <Trailer id={moviesId} />
          </Suspense>
        </Modal>
      )}
    </>
  );
};

export default memo(MovieDetails);