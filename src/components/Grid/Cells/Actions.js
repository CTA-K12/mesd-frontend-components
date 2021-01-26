import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ActionButton = styled(Button)`
  padding: 0.2rem 0.4rem !important;
  font-size: 0.71rem !important;
  line-height: 1.5 !important;
  border-radius: 0.2rem;
`;

const ActionsCell = (actions) => {
  const GeneratedActionsCell = ({ label, content }) => {
    const mappedActions = actions.map(action => (
      <ActionButton onClick={() => action.action(content)} variant={action.variant ? action.variant : 'secondary'}>
        <FontAwesomeIcon icon={action.icon} />
      </ActionButton>
    ))

    return (
      <td data-header={label}>
        <span><ButtonGroup aria-label="Row Actions">
          {mappedActions}
        </ButtonGroup></span>
      </td>
    );
  }

  GeneratedActionsCell.propTypes = {
    columnName: PropTypes.string.isRequired,
    row: PropTypes.object.isRequired,
    label: PropTypes.string,
  }

  GeneratedActionsCell.defaultProps = {
    sortable: false,
    label: '',
  }
  
  return GeneratedActionsCell;
}

ActionsCell.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.any.isRequired,
    action: PropTypes.func.isRequired,
    variant: PropTypes.string,
  })),
}

export default ActionsCell;