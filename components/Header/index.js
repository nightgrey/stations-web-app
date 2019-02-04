import React from 'react';
import Logo from '../Logo';

export default ({ children, ...other }) => (
  <header className="header" {...other}>
    {children}
  </header>
);
