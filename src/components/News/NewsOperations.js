import axios from 'axios';

import {
  fetchNewsStart,
  fetchNewsSuccsess,
  fetchNewsErorr,
} from './NewsActions';

export const getNews = () => dispatch => {
  dispatch(fetchNewsStart());
  axios
    .get(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7',
    )
    .then(data => dispatch(fetchNewsSuccsess(data.data.articles)))
    .catch(error => dispatch(fetchNewsErorr(error)));
};
