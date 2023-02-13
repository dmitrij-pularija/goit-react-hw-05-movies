import axios from 'axios';
const BASE_PATCH = 'https://api.themoviedb.org/3/';

const getData = async (type, page, search) => {
  let path = BASE_PATCH + 'genre/movie/list';
  const presettings = {
    params: {
      api_key: '7ecf05e00775ac597ec403d449a4c667',
      language: 'en-US',
    },
  };

  if (type === 'movies') {
    path = BASE_PATCH + 'search/movie';
    presettings.params.page = page;
    presettings.params.query = search;
    presettings.params.include_adult = 'false';
  }

  if (type === 'trending') {
    path = BASE_PATCH + 'trending/movie/day';
    presettings.params.page = page;
    presettings.params.include_adult = 'false';
  }

  if (type === 'reviews') {
    path = BASE_PATCH + 'movie/' + search + '/reviews';
    presettings.params.page = page;
  }

  if (type === 'details') path = BASE_PATCH + 'movie/' + search;
  if (type === 'credits') path = BASE_PATCH + 'movie/' + search + '/credits';
  if (type === 'person') path = BASE_PATCH + 'person/' + search;
  if (type === 'trailer') path = BASE_PATCH + 'movie/' + search + '/videos';

  return await axios.get(`${path}`, presettings).then(result => {
    return result.data;
  });
};

export default getData;