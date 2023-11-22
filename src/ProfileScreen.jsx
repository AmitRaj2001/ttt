import React from 'react';
import './profilescreen.css';
import Icon from './Icon';
import Article from './Article';
import profileData from './profileData.json';
import dp from './dp.png';
import bg from './bg.png';
import logo from './logo.svg';
import VerifiedIcon from '@mui/icons-material/Verified';
import DiamondIcon from '@mui/icons-material/Diamond';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

const ProfileScreen = () => {
  console.log('ProfileScreen component loading');

  return (
    <div>
      {/* Profile header */}
      <div className='navbar'>
        <img className='dp' src={logo} alt='Terribly Tiny Tales' />
        <button className='courses-btn'>Courses</button>
      </div>

      <div>
        <img className='bg' src={bg} alt='background' />
      </div>

      <div className="profile-header">
        <img className='dp' src={dp} alt={profileData.name} />
        <h2>
          {profileData.name}
          <Icon component={DiamondIcon} color="purple" />
          <Icon component={VerifiedIcon} color="green" />
        </h2>
        <div className="profile-info">
          <button>{profileData.followers}</button>
          <p></p>
          <button>&nbsp;{profileData.following}&nbsp;</button>
        </div>
        <h6>Followers &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Following</h6>
      </div>

      <div>
        <h3 className='designation'>{profileData.designation}</h3>
        <a style={{ color: 'skyblue' }} href={profileData.website}>{profileData.website}</a>
        <div className='designation'>
          <Icon component={StarIcon} color="lightblue" /> 125 &nbsp;
          <Icon component={ThumbUpIcon} color="gold" /> 12 &nbsp;
          <Icon component={VisibilityIcon} color="lightgray" /> 57.8k &nbsp;
          <Icon component={FavoriteBorderIcon} color="Red" /> 26.0k &nbsp;
        </div>
      </div>

      <div><br /><br /></div>

      <div className="profile-stats">
        <div className="stat-item">
          <div className="line" />
          <h3 style={{ color: 'skyblue' }}>{profileData.posts} Posts</h3>
        </div>
      </div>

      <div className="profile-articles">
        <ul>
          {profileData.articles.map((article) => (
            <Article key={article.title} {...article} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileScreen;
