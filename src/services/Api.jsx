import axios from 'axios';
const BASE_PATCH = 'https://api.themoviedb.org/3/';

// const GENRES_PATCH = 'https://api.themoviedb.org/3/genre/movie/list';
// const TRENDING_PATCH = 'https://api.themoviedb.org/3/trending/movie/day';
// const SEARCH_PATCH = 'https://api.themoviedb.org/3/search/movie';
// const DETAILS_PATCH = 'https://api.themoviedb.org/3/movie/';
// const PERSON_PATCH = 'https://api.themoviedb.org/3/person/';

const getMovies = async (type, page, search) => {
  let path = BASE_PATCH + "genre/movie/list";
  const presettings = {
    params: {
      api_key: '7ecf05e00775ac597ec403d449a4c667',
      language: 'en-US',
    },
  };

  if (type === 'movies') {
    path = BASE_PATCH + "search/movie";
    presettings.params.page=page;
    presettings.params.query=search;
    presettings.params.include_adult='false';
    // presettings = {
    //   params: {
    //     api_key: '7ecf05e00775ac597ec403d449a4c667',
    //     query: `${search}`,
    //     include_adult: 'false',
    //     language: 'en-US',
    //     page: `${page}`,
    //   },
    // };
  }

  if (type === 'trending') {
    path = BASE_PATCH + "trending/movie/day";
    presettings.params.page=page;
    presettings.params.include_adult='false';
    // presettings = {
    //   params: {
    //     api_key: '7ecf05e00775ac597ec403d449a4c667',
    //     include_adult: 'false',
    //     language: 'en-US',
    //     page: `${page}`,
    //   },
    // };
  }

  if (type === 'details') {
    path = BASE_PATCH + "movie/" + search;
    // presettings = {
    //   params: {
    //     api_key: '7ecf05e00775ac597ec403d449a4c667',
    //     language: 'en-US',
    //   },
    // };
  }

  if (type === 'reviews') {
    path = BASE_PATCH + "movie/" + search + '/reviews';
    presettings.params.page=page;
    // presettings = {
    //   params: {
    //     api_key: '7ecf05e00775ac597ec403d449a4c667',
    //     language: 'en-US',
    //     page: `${page}`,
    //   },
    // };
  }

  if (type === 'credits') {
    path = BASE_PATCH + "movie/" + search + '/credits';
    // presettings = {
    //   params: {
    //     api_key: '7ecf05e00775ac597ec403d449a4c667',
    //     language: 'en-US',
    //   },
    // };
  }

  if (type === 'person') {
    path = BASE_PATCH + "person/" + search;
    // presettings = {
    //   params: {
    //     api_key: '7ecf05e00775ac597ec403d449a4c667',
    //     language: 'en-US',
    //   },
    // };
  }

  if (type === 'trailer') {
    path = BASE_PATCH + "movie/" + search + '/videos';
    // presettings = {
    //   params: {
    //     api_key: '7ecf05e00775ac597ec403d449a4c667',
    //     language: 'en-US',
    //   },
    // };
  }

  return await axios.get(`${path}`, presettings).then(result => {
    return result.data;
  });
};

export default getMovies;
