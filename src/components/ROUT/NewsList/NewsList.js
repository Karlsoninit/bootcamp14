import React from 'react';
import NewsListItem from '../NewsListItem/NewsListItem';
import css from './NewsList.module.css';

const NewsList = ({ data, category }) => {
  return (
    <div className={css.container}>
      {data.map(article => (
        <NewsListItem
          category={category}
          key={article.publishedAt}
          {...article}
        />
      ))}
    </div>
  );
};

export default NewsList;
