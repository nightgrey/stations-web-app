import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/pro-solid-svg-icons';
import styled from 'styled-components';

import { rhythm, gray } from '../utilities/styles';

export default (props) => (
  <FontAwesomeIcon
    icon={faBus}
    css={`
    font-size: ${rhythm(1)}
    `}
    {...props}
  />
);
