import React from 'react';
import { Link } from 'react-router-dom';
const NewsListItem = ({ title, publishedAt }) => (
  <li>
    <Link to={`news/${publishedAt}`}>{title}</Link>
  </li>
);

export default NewsListItem;
