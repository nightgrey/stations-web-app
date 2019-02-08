import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
  static propTypes = {
    line: PropTypes.number,
    direction: PropTypes.string,
    departure: PropTypes.number,
  };

  render() {
    const { line, direction, departure } = this.props;

    return (
      <div>
        {line} {direction} {departure}
      </div>
    );
  }
}