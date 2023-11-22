import React from 'react';

const Icon = ({ component: Component, color, ...rest }) => (
  <Component style={{ color, ...rest }} />
);

export default Icon;
