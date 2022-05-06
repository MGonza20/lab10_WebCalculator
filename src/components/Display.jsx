import React from 'react';
import './display.css';
import PropTypes from 'prop-types';

function Display({ showActual, PMstate }) {
  const displayMaker = (showActualParam, PMstateParam) => {
    if ((showActualParam > 999999999) || (showActualParam < 0)) {
      if (!PMstateParam) {
        return (<p className="textRes">ERROR</p>);
      }
    }
    if (!(showActualParam > 999999999) || (showActualParam < 0)) {
      if (!PMstateParam) {
        return (<p className="textRes">{String(showActual).slice(0, 9)}</p>);
      }
    }
  };

  return (
    <div className="displayDiv">
      {/* displayMaker(showActual, PMstate) */}
      <p className="textRes">{ (((showActual > 999999999) || (showActual < 0)) && !PMstate) ? 'ERROR' : String(showActual).slice(0, 9)}</p>
      {!PMstate ? 'plus' : 'minus'}
    </div>
  );
}

export default Display;

Display.propTypes = {
  showActual: PropTypes.string.isRequired,
  PMstate: PropTypes.bool.isRequired,
};
