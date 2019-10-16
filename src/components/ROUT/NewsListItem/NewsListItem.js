import React from 'react';
import { Link } from 'react-router-dom';
const NewsListItem = ({ title, publishedAt, author, category }) => (
  <li>
    <Link
      to={{
        pathname: `news/${publishedAt}/category=${category}?search=fdffdf`,
        state: { category: `${category}` },
      }}
    >
      {title}
    </Link>
  </li>
);

export default NewsListItem;
