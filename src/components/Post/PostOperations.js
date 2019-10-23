import axios from 'axios';

import {
  fetchPostStart,
  fetchPostSuccess,
  fetchPostError,
} from './PostActions';

export const getPost = () => dispatch => {
  dispatch(fetchPostStart());

  axios
    .get(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7',
    )
    .then(data => dispatch(fetchPostSuccess(data.data.articles)))
    .catch(error => dispatch(fetchPostError(error)));
};
