import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import { rhythm, gray, colors } from '../utilities/styles';

export default ({ children, ...other }) => (
  <header css={`
    background: ${colors.primary};
    border-bottom: 1px solid ${gray(95)};
    padding: ${rhythm(1)};
  `} {...other}>
    <Logo css={`color: #fff`} /> {children}
  </header>
);
