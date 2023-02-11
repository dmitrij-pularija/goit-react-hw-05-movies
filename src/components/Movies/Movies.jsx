import { useSearchParams } from "react-router-dom";
import getData from '../../services/Api';
import MoviesGallery from '../MoviesGallery/MoviesGallery';
import Buttons from '../PaginationBlock/PaginationBlock';
import Notification from '../Notification/Notification';
import { useState, useEffect } from 'react';


const Movies = ({genres}) => {
    // const [genres, setGenres] = useState([]);
    const [movies, setMovie] = useState([]);
  const [filter, setFilter] = useState('');
    const [pages, setPages] = useState(0);
    const [state, setState] = useState({ loading: false, error: false });
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");
    const getPage = Number(searchParams.get("page"));
    const page = (getPage ? getPage : 1);
    // !getPage && setFilter('');
    // const { totalPage } = pages;
    // !search && setMovie([]);



    useEffect(() => {

      if (search && search !== filter) {
      setFilter(search);
      setMovie([]);
      setPages(0);
    };

    // getData().then((result) => {
    //       setGenres(result.genres);
    //     });
      }, [filter, search]);

      useEffect(() => {
  if (filter) {
  console.log("search by", filter);

        setState(prevState => {
          return { ...prevState, loading: true };
        });
        const genresName = genre_ids => genres.reduce((array, genre) => {genre_ids.includes(Number(genre.id)) && array.push(genre.name); return array;}, []);
        getData('movies', page, filter)
          .then(({ results, total_pages }) => {
            setPages(total_pages);
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

      const pagination = nextPage => {
        // let nextPage = page;
        // let {
        //   target: { text },
        // } = event;
        // if (!text) text = event.target.innerHTML;
        // if (text.includes('…')) return;
        // if (Number.isInteger(Number(text))) nextPage = Number(text);
        // if (text.includes('›')) ++nextPage;
        // if (text.includes('‹')) --nextPage;
        setMovie([]);
        setSearchParams({ search: filter, page: nextPage });
        // setPages(prevPages => {
        //   return { ...prevPages, page: nextPage };
        // });
      };  

    const { loading, error } = state;
    return (
      <>
      {movies.length && !loading && (
        <MoviesGallery movies={movies} />
      )}
      {movies.length && !loading && (
        <Buttons onPagination={pagination} total={pages} curent={page} />
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