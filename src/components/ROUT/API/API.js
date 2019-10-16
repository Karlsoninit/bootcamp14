import axios from 'axios';

export const getAllNews = () => {
  return axios
    .get(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7',
    )
    .then(data => data.data.articles);
};

export const chooseCategory = (category = 'health') => {
  return axios
    .get(
      `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=86efb1d9e5074721b8f151f282c7bcf7`,
    )
    .then(data => data.data.articles);
};
