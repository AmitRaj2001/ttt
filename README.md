# Profile Screen - React Component

## Dependencies
- React
- Material UI icons library

## File Structure
- `profilescreen.js`: Main React component file.
- `profileData.json`: JSON file for profile data.
- `profilescreen.css`: CSS file for styling.
- `dp.png`, `bg.png`, `logo.svg`: Image files.
- `Article.js`: React component for displaying articles.
- `Icon.js`: React component for rendering icons.

## Component Structure
The `ProfileScreen` component is organized into distinct sections:

### Navbar
The Navbar section contains a logo and a "Courses" button.

### Background Image
This section displays a captivating background image.

### Profile Header
The Profile Header includes the user's profile picture, name, badges (diamond and verified), and follower and following counts.

### Designation and Website
This section displays the user's designation and provides a link to their website.

### Profile Statistics
The Profile Statistics section showcases various metrics, including stars, thumbs up, views, and favorites.

### Profile Articles
The Profile Articles section utilizes the `.map` function to iterate over articles in `profileData`. It dynamically renders the `Article` component from `Article.js` to display each article.

## Article Component
The `Article.js` component is responsible for rendering individual articles. It includes the article title, like icon, description, and view details.

## Icon Component
The `Icon.js` component abstracts the rendering of Material UI icons, promoting code modularity and reusability throughout the profile screen component.

## Usage
To incorporate this component, import it into your React application and include it in your JSX:

```javascript
import React from 'react';
import ProfileScreen from './path/to/ProfileScreen';

function App() {
  return (
    <div>
      <ProfileScreen />
    </div>
  );
}

export default App;
```

## Profile Data
The user's profile data is stored in `profileData.json`, containing information such as name, followers, following, designation, website, and an array of articles.

## Material UI Icons
The component leverages Material UI icons for various elements, utilizing the `Icon` component from `Icon.js`:

```jsx
import VerifiedIcon from '@mui/icons-material/Verified';
import DiamondIcon from '@mui/icons-material/Diamond';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
```

