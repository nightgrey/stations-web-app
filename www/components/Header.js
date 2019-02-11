import React from 'react';

import Logo from './Logo';
import Container from './Container';
import { rhythm, gray, colors } from '../utilities/styles';

export default ({ children, ...other }) => (
  <header
    css={`
    background: ${colors.primary};
    border-bottom: 1px solid ${gray(95)};
  `}
    {...other}>
    <Container>
      <div css={`
        padding: ${rhythm(1)} 0;
      `}>
        <Logo css="color: #fff" />
        {' '}
        {children}
      </div>
    </Container>
  </header>
);
