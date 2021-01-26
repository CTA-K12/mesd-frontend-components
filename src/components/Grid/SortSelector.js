import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const SortSelector = ({ onSort, sort, columns }) => {
  const options = [];
  options.push(<option key="default-option" value="">Sort</option>);
  columns.forEach(column => {
    if (column.props.sortable) {
      options.push(<option key={`${column.props.name}|ASC`} value={`${column.props.name}|ASC`}>{column.props.label} &#8593;</option>);
      options.push(<option key={`${column.props.name}|DESC`} value={`${column.props.name}|DESC`}>{column.props.label} &#8595;</option>);
    }
  });

  return (
    <Form.Control as="select" value={sort ? `${sort.name}|${sort.direction}` : ''} onChange={event => {
      const value = event.target.value;
      if (value) {
        const values = value.split('|');
        onSort({
          name: values[0],
          direction: values[1],
        });
      } else {
        onSort(null);
      }
    }}>
      {options}
    </Form.Control>
  )
}

SortSelector.propTypes = {
  onSort: PropTypes.func.isRequired,
  sort: PropTypes.shape({
    name: PropTypes.string,
    direction: PropTypes.string,
  }),
  columns: PropTypes.arrayOf(PropTypes.node),
}

export default SortSelector;