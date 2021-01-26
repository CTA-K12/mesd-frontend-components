import React from 'react';
import PropTypes from 'prop-types';

const Money = ({ content, label }) => {
  const formatted = isNaN(content) ? ' ' : 
    (content >= 0) ? content.toFixed(2) : `(${Math.abs(content).toFixed(2)})`;

  return (
    <td data-header={label}>
      <span>{ formatted }</span>
    </td>
  );
}

Money.propTypes = {
  columnName: PropTypes.string.isRequired,
  row: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}

export default Money;