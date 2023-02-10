import { useSearchParams } from "react-router-dom";
import getMovies from '../../services/Api';
import MoviesGallery from '../MoviesGallery/MoviesGallery';
import Buttons from '../Buttons/Buttons';
import Notification from '../Notification/Notification';
import { useState, useEffect } from 'react';


const Movies = () => {
    const [genres, setGenres] = useState([]);
    const [movies, setMovie] = useState([]);
  const [filter, setFilter] = useState('');
    const [pages, setPages] = useState({ page: 1, totalPage: 0 });
    const [state, setState] = useState({ loading: false, error: false });
    const [searchParams] = useSearchParams();
  
    const { totalPage, page } = pages;


    useEffect(() => {
      const search = searchParams.get("search");
      if (search && search !== filter) {
      setFilter(search);
      setMovie([]);
      setPages({ page: 1, totalPage: 0 });
    };

      getMovies().then((result) => {
          setGenres(result.genres);
        });
      }, [filter, searchParams]);

      useEffect(() => {
  if (filter) {
  console.log("search by", filter);

        setState(prevState => {
          return { ...prevState, loading: true };
        });
        const genresName = genre_ids => genres.reduce((array, genre) => {genre_ids.includes(Number(genre.id)) && array.push(genre.name); return array;}, []);
        getMovies('movies', page, filter)
          .then(({ results, total_pages }) => {
            setPages(prevPages => {
              return { ...prevPages, totalPage: total_pages };
            });
            setMovie(
              results.map(movie => ({
                id: movie.id,
                poster: movie.poster_path,
                title: movie.title,
                release_date: movie.release_date,
                genres: genresName(movie.genre_ids),
                vote_average: movie.vote_average,
                vote_count: movie.vote_count,
              }))
            );
          })
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
          }
    
      }, [genres, page, filter]);

      const pagination = event => {
        let nextPage = page;
        let {
          target: { text },
        } = event;
        if (!text) text = event.target.innerHTML;
        if (text.includes('…')) return;
        if (Number.isInteger(Number(text))) nextPage = Number(text);
        if (text.includes('›')) ++nextPage;
        if (text.includes('‹')) --nextPage;
        setMovie([]);
        setPages(prevPages => {
          return { ...prevPages, page: nextPage };
        });
      };  

    const { loading, error } = state;





    return (
      <>
      {movies.length && !loading && (
        <MoviesGallery movies={movies} />
      )}
      {movies.length && !loading && (
        <Buttons onPagination={pagination} total={totalPage} curent={page} />
      )}
      {filter && !movies.length && !loading && (
        <Notification
          message={
            error
              ? 'Something went wrong, please try again.'
              : 'Movies not found'
          }
        />
      )}
      </>
    );
  };

export default Movies;