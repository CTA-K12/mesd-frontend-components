import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GridTable from './Table';
import LoadingRow from './LoadingRow';
import Column from './Column';
import SortSelector from './SortSelector';

const SortSelectorWrapper = styled.div`
  @media(min-width: 577px) {
    display: none;
  }
  
  @media(max-width: 576px) {
    margin-bottom: 1em;
  }
`;

function Grid({ children, loading, data, onSort, sort, page, resultsPerPage, externalPagination }) {
  const mappedColumns = React.Children.map(children, column => {
    return React.cloneElement(column, {
      sort: sort,
      onSort: onSort,
    });
  });


  // If the loading set is currently set to true, just show the loading row
  if (loading) {
    return (
        <GridTable responsive>
          <thead>
            <tr>
              {mappedColumns}
            </tr>
          </thead>
          <tbody>
            <LoadingRow colSpan={React.Children.count(children)} rowSpan={resultsPerPage} />
          </tbody>
        </GridTable>
    )
  }

  // Process the data into the rows and cols
  const offset = (page - 1) * resultsPerPage;
  const rowData = externalPagination ? data : data.slice(offset, offset + resultsPerPage);
  const rows = rowData.map((item, index) => {
    const row = React.Children.map(children, column => {
      const Cell = column.props.component;

      const keys = column.props.name.split('.');
      let content = item;
      for (let i = 0; i < keys.length && content; i++) {
        content = content[keys[i]];
      }

      return <Cell key={`${column.props.name}-${index}`} columnName={column.props.name} content={content} row={item} label={column.props.label} />
    });

    return <tr key={`row${index}`}>{ row }</tr>;
  })

  return (
    <>
      <SortSelectorWrapper>
        <SortSelector columns={children} onSort={onSort} sort={sort} />
      </SortSelectorWrapper>
      <GridTable>
        <thead>
          <tr>
            {mappedColumns}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </GridTable>
    </>
  );
}

Grid.propTypes = {
  children: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  data: PropTypes.array,
  onSort: PropTypes.func,
  resultsPerPage: PropTypes.number,
  externalPagination: PropTypes.bool,
}

Grid.defaultProps = {
  loading: false,
  data: [],
  resultsPerPage: 15,
  externalPagination: false,
}

Grid.Column = Column;

export default Grid;