import React from 'react';
import NewsListItem from '../NewsListItem/NewsListItem';

const NewsList = ({ data, category }) => {
  return data.map(article => (
    <>
      <NewsListItem
        category={category}
        key={article.publishedAt}
        {...article}
      />
    </>
  ));
};

export default NewsList;
