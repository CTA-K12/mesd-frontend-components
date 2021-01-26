import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DateCell = (format) => {
  const Date = ({ label, content }) => (
    <td data-header={label}>
      <span>{ content ? moment(content).format(format) : ' ' }</span>
    </td>
  )

  Date.propTypes = {
    columnName: PropTypes.string.isRequired,
    row: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
  }
  
  return Date;
}

export default DateCell;