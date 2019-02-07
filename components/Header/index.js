import React from 'react';
import Logo from '../Logo';

import { typography } from '../../utilities/styles';

import { css } from 'styled-components';

export default ({ children, ...other }) => (
  <header css={`
    background: #f7f7f7;
    padding: ${typography.rhythm(1)};
  `} {...other}>
    {children}
  </header>
);
