import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const TrueIcon = styled(FontAwesomeIcon)`
  color: #2eb85c;
`;

const FalseIcon = styled(FontAwesomeIcon)`
  color: #e55353;  
`;

const Boolean = ({ label, content }) => (
  <td data-header={label}>
    <span>{ content ? <TrueIcon icon={faCheck} /> : <FalseIcon icon={faTimes} /> }</span>
  </td>
)

Boolean.propTypes = {
  columnName: PropTypes.string.isRequired,
  row: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}

export default Boolean;