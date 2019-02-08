import React from 'react';

import { breakpoints, mediaQuery, rhythm } from '../utilities/styles';

export default props => (
  <div
    css={`
    max-width: ${breakpoints.container}px;
    margin: 0 auto;
    padding-left: ${rhythm(1)};
    padding-right: ${rhythm(1)};

    ${mediaQuery.container`
      padding-left: 0;
      padding-right: 0;
    `}

    `}
    {...props}
  />
);
