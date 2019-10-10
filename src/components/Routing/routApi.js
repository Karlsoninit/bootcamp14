import axios from 'axios';

export const fetchNews = () => {
  return axios
    .get(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7',
    )
    .then(data => data.data.articles);
};

export const getUniqueAuthor = id => {
  return axios
    .get(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7',
    )
    .then(data => data.data.articles.filter(elem => elem.publishedAt === id));
};
