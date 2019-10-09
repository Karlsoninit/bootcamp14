import React from 'react';
import { Consumer } from '../News/News';

const NewsListItem = ({ description, url, title, urlToImage }) => {
  return (
    <Consumer>
      {content => (
        <li
          style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            border: '1px solid red',
            width: '300px',
          }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h1>{content.name}</h1>
            <h2>{title}</h2>
            <img alt="img" style={{ width: '300px' }} src={urlToImage} />
            <p>{description}</p>
          </a>
        </li>
      )}
    </Consumer>
  );
};

export default NewsListItem;
