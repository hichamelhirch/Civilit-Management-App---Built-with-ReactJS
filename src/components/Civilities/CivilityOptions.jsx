import React from 'react';
import PropTypes from 'prop-types';

function CivilityOptions(props) {
  return (
    <div className="border border-red border-4 btn-group btn-group-lg mt-3" role="group" aria-label="Basic mixed styles example">
      <button type="button" onClick={() => props.handleSelectedOptions("Monsieur")} className="btn btn-warning">Monsieur</button>
      <button type="button" onClick={() => props.handleSelectedOptions("Madame")} className="btn btn-success">Madame</button>
    </div>
  );
}

CivilityOptions.propTypes = {
  handleSelectedOptions: PropTypes.func.isRequired, // Correction de propTypes en PropTypes et ajout de isRequired
};

export default CivilityOptions;
