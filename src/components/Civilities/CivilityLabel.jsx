import React from 'react';
import PropTypes from 'prop-types';

function CivilityLabel({ civility }) {
  return (
    <h3 className='border border-info border-4'>
      <p>Bonjour <span className='text-success'>{civility}</span></p>
    </h3>
  );
}

CivilityLabel.propTypes = {
  civility: PropTypes.string.isRequired, // Correction de Prototypes en PropTypes et ajout de isRequired
};

export default CivilityLabel;
