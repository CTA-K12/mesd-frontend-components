import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';

import Grid from './Grid';
import Column from './Column';
import Paginator from './Paginator';
import SearchBox from './SearchBox';

const ApolloGrid = ({ query, children, resultsPerPage, extractRows, extractTotal, constructVariables, additionalVariables }) => {
  const [sort, setSort] = useState(null);
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);

  const { loading, error, data, fetchMore } = useQuery(query, constructVariables(page, search, sort, resultsPerPage, additionalVariables));
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (!isFirstRun.current) {
      fetchMore({
        query,
        ...constructVariables(page, search, sort, resultsPerPage, additionalVariables),
        updateQuery: (previousResult, { fetchMoreResult }) => (fetchMoreResult),
      });
    } else {
      isFirstRun.current = false;
    }
  }, [sort, search, page])

  return (
    <>
      <SearchBox onSearch={setSearch} />
      <Grid loading={loading} data={loading ? [] : extractRows(data)} sort={sort} page={page} resultsPerPage={resultsPerPage} onSort={setSort} externalPagination={true}>
        {children}
      </Grid>
      <Paginator page={page} onPageChange={setPage} resultsPerPage={resultsPerPage} totalResults={loading ? 0 : extractTotal(data)} />
    </>
  )
}

ApolloGrid.propTypes = {
  query: PropTypes.any.isRequired,
  children: PropTypes.array,
  resultsPerPage: PropTypes.number,
  extractRows: PropTypes.func,
  extractType: PropTypes.func,
  constructVariables: PropTypes.func,
  additionVariables: PropTypes.object,
  fetchPolicy: PropTypes.oneOf(['network-only', 'cache-first', 'cache-only', 'cache-and-network', 'no-cache', 'standy'])
}

ApolloGrid.defaultProps = {
  additionalVariables: {},
  resultsPerPage: 15,
  fetchPolicy: 'network-only',
  extractRows: (data) => {
    let rows = [];
    for (const property in data) {
      if (data[property]) {
        rows = rows.concat(data[property].edges.map(edge => (edge.node)));
      }
    }

    return rows;
  },
  extractTotal: (data) => {
    let total = 0;
    for (const property in data) {
      if (data[property] && data[property].pageInfo) {
        total = total + data[property].pageInfo.total;
      }
    }

    return total;
  },
  constructVariables: (page, search, sort, resultsPerPage, additionalVariables) => ({
    variables: {
      search: search,
      offset: (page - 1) * resultsPerPage,
      limit: resultsPerPage,
      sortAttribute: sort ? sort.name : null,
      sortDirection: sort ? sort.direction : null,
      ...additionalVariables
    }
  }),
}

ApolloGrid.Column = Column;

export default ApolloGrid;