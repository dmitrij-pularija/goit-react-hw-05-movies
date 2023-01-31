import axios from 'axios';

const getImages = (imageRequest, page) => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '31279571-1cfba33362a16abb8b6f73723',
        q: `${imageRequest ? imageRequest : "ukraine"}`,
        lang: 'en',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: '12',
        page: `${page}`,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};

export default getImages;