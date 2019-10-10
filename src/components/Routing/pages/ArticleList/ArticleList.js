import React from 'react';

import { Link } from 'react-router-dom';

const ArticleList = ({ data, match }) => {
  console.log('params', match);
  return (
    <ul>
      {data.map(({ title, url, publishedAt }) => (
        <li key={publishedAt}>
          <Link to={`/articles/${publishedAt}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
