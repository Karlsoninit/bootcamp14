import React from 'react';
import shortId from 'shortid';
import NewsListItem from '../NewsListItem/NewsListItem';
import { hoc } from '../HOC/Toggle';

const NewsList = ({ articles }) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {articles.map(article => (
        <NewsListItem key={shortId()} {...article} />
      ))}
    </ul>
  );
};

export default hoc(NewsList);
