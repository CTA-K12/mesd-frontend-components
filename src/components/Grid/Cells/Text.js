import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ label, content }) => (
  <td data-header={label}>
    <span>{content}</span>
  </td>
);

Text.propTypes = {
  columnName: PropTypes.string.isRequired,
  row: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}

export default Text;