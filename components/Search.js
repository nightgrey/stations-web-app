import React from 'react';
import Autocomplete from 'react-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-regular-svg-icons';
import Router from 'next/router'
import { rhythm, gray } from "../utilities/styles";

import { getStations } from '../data/stations';

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

    Router.push({
      pathname: '/station',
      query: { id: station.id }
    })
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

    return (
      <span css={`
        border: 1px solid ${gray(80)};
        background: #fff;
        padding: ${rhythm(0.25)} ${rhythm(0.5)}
      `}>
        <Autocomplete
          getItemValue={station => station.stop}
          items={getStations()}

          renderItem={(station, isHighlighted) => (
            <div
              key={station.id}
              style={{ background: isHighlighted ? 'lightgray' : 'white', cursor: 'pointer' }}
            >
              {station.stop}
              {station.platform ? ` - ${station.platform}` : null}
            </div>
          )}
          shouldItemRender={this.matchStationToSearch}
          value={value}
          onChange={this.onChange}
          onSelect={this.onSelect}
          inputProps={{
            style: {
              border: 'none',
              background: 'none',
              outline: 'none'
            }
          }}
        />
        <FontAwesomeIcon icon={faSearch} />
      </span>
    );
  }
}

export default Search;
