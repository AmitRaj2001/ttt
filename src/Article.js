import React from 'react';
import Icon from './Icon';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


import leftSidePic from './a.png';

const Article = ({ title, description, readTime, views }) => (
  <div className="article-item">

    {leftSidePic && <img className="left-side-pic" src={leftSidePic} alt="Left Side" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />}
    <div className="article-content">
      <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
      <p className='like'><Icon component={ThumbUpIcon} color="gold" /></p>
      <a href={description} style={{ color: 'black', textDecoration: 'none' }}>
        <p>{description}</p>
      </a>
      <p className='views'>{readTime} &nbsp; &nbsp; {views} views</p>
    </div>
    <div className="article-line"></div>
  </div>
);

export default Article;
