import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingRow = ({ rowSpan, colSpan, key }) => (
  <tr rowSpan={rowSpan} key={key}>
    <td
      colSpan={colSpan}
      className="text-center text-muted"
    >
      <FontAwesomeIcon icon={faSpinner} pulse size="5x" />
    </td>
  </tr>
)

LoadingRow.propTypes = {
  rowSpan: PropTypes.number.isRequired,
  colSpan: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
}

LoadingRow.defaultProps = {
  rowSpan: 1,
  colSpan: 1,
  key: 'loading',
}

export default LoadingRow;