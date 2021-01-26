import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SortIcon from './SortIcon';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

import TextCell from './Cells/Text';

export const SORT_ASC = 'ASC';
export const SORT_DESC = 'DESC';

const Column = ({ name, label, sortable, sort, onSort }) => {
  
  
  return (
    <th
      data-header={label} 
      onClick={() => {
        if (sortable) {
          onSort({ name, direction: (sort && sort.direction === SORT_ASC) ? SORT_DESC : SORT_ASC });
        }
      }
    } scope="col">
      {label} {sortable && <SortIcon icon={(sort && sort.name === name) ? (sort.direction === SORT_ASC ? faSortUp : faSortDown ) : faSort} />}
    </th>
  );
}

Column.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  sortable: PropTypes.bool,
  sort: PropTypes.shape({
    name: PropTypes.string,
    direction: PropTypes.string
  }),
  onSort: PropTypes.func.isRequired,
  component: PropTypes.element.isRequired,
}

Column.defaultProps = {
  onSearchChange: (name) => {},
  component: TextCell,
}

Column.SORT_ASC = SORT_ASC;
Column.SORT_DESC = SORT_DESC;

export default Column;