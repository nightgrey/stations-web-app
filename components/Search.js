import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-regular-svg-icons';

import { getStations, getStationById } from '../data/stations';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      selectedStation: null,
    };
  }

  componentDidMount() {
    // const { match } = this.props;
    //
    // if (match.params.id) {
    //   this.setState({ value: getStationById(match.params.id).stop });
    // }
  }

  /**
   * `onChange` event for autocomplete.
   * @param event
   */
  onChange = (event) => {
    this.setState({ value: event.target.value });
  };

  /**
   * Triggers when you click on an item in the dropdown.
   * @param value Item value
   * @param station Station object
   */
  onSelect = (value, station) => {
    this.setState({ value, selectedStation: station });
  };

  /**
   * Matches stations 'stop' and 'platform' to search term.
   * @param station Station object
   * @param value Search term
   * @returns {boolean}
   */
  matchStationToSearch = (station, value) => station.stop.toLowerCase().indexOf(value.toLowerCase()) !== -1
    || station.platform.toLowerCase().indexOf(value.toLowerCase()) !== -1;

  render() {
    const { value, selectedStation } = this.state;

    if (selectedStation !== null) {
    }

    return (
      <React.Fragment>
        <FontAwesomeIcon icon={faSearch} />
        <Autocomplete
          getItemValue={station => station.stop}
          items={getStations()}
          renderItem={(station, isHighlighted) => (
            <div
              key={station.id}
              style={{ background: isHighlighted ? 'lightgray' : 'white' }}
            >
              {station.stop}
              {station.platform ? ` - ${station.platform}` : null}
            </div>
          )}
          shouldItemRender={this.matchStationToSearch}
          value={value}
          onChange={this.onChange}
          onSelect={this.onSelect}
        />
      </React.Fragment>
    );
  }
}

export default Search;
