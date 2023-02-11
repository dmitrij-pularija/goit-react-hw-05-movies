import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import getData from '../../services/Api';
import MoviesGallery from '../MoviesGallery/MoviesGallery';
// import { Container } from '../SharedLayout/SharedLayout.styled';
import Buttons from '../Buttons/Buttons';
// import Loader from './Loader/Loader';
import Notification from '../Notification/Notification';


const Home = () => {
    const [genres, setGenres] = useState([]);
    const [movies, setMovie] = useState([]);
    const [pages, setPages] = useState(0);
    // const [pages, setPages] = useState({ page: 1, totalPage: 0 });
    const [state, setState] = useState({ loading: false, error: false });
    // const { totalPage, page } = pages;
    const [searchParams, setSearchParams] = useSearchParams();
    // const page = Number(searchParams.get("page"));
    const getPage = Number(searchParams.get("page"));
    const page = (getPage ? getPage : 1);

    useEffect(() => {
      getData().then((result) => {
          setGenres(result.genres);
        });
      }, []);


      useEffect(() => {
        if (genres) { 
        setState(prevState => {
          return { ...prevState, loading: true };
        });
        const genresName = genre_ids => genres.reduce((array, genre) => {genre_ids.includes(Number(genre.id)) && array.push(genre.name); return array;}, []);
    
        getData('trending', page )
          .then(({ results, total_pages }) => {
            setPages(total_pages);
            // setPages(prevPages => {
            //   return { ...prevPages, totalPage: total_pages };
            // });
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
      }, [genres, page]);

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
        setSearchParams({ page: nextPage });

        // setPages(prevPages => {
        //   return { ...prevPages, page: nextPage };

        // });
      };  

    const { loading, error } = state;

    return (
        <>
      {/* {loading && <Loader />} */}
      {movies.length && !loading && (
        <MoviesGallery movies={movies} />
      )}
      {movies.length && !loading && (
        <Buttons onPagination={pagination} total={pages} curent={page} />
      )}
      {!movies.length && !loading && (
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
export default Home;

// const Home = () => {
//     return (
//       <>
//       <div>Home!</div>
//       </>
//     );
//   };

// export default Home;