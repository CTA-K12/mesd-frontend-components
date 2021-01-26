import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Paginator = ({ onPageChange, resultsPerPage, totalResults, page, cursorBased, variant, hasNextPage, hasPreviousPage }) => {
  const lastPage = totalResults ? Math.ceil(totalResults / resultsPerPage) : 1; 
  const hasPrev = cursorBased ? hasPreviousPage : page > 1;
  const hasNext = cursorBased ? hasNextPage : page < lastPage;

  return (
    <ButtonGroup aria-label="Page Controls" className="float-right">
      {!cursorBased && <Button variant={variant} onClick={() => onPageChange(1)} disabled={page === 1}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </Button>}
      <Button variant={variant} onClick={() => onPageChange(page - 1)} disabled={!hasPrev}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
      <Button variant={variant} disabled>
        {cursorBased ? page : `${page} / ${lastPage}`}
      </Button>
      <Button variant={variant} onClick={() => onPageChange(page + 1)} disabled={!hasNext}>
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
      {!cursorBased && <Button variant={variant} onClick={() => onPageChange(lastPage)} disabled={page >= lastPage}>
        <FontAwesomeIcon icon={faAngleDoubleRight} />  
      </Button>}
    </ButtonGroup>
  )
}

Paginator.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  resultsPerPage: PropTypes.number,
  totalResults: PropTypes.number,
  cursorBased: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link']),
}

Paginator.defaultProps = {
  cursorBased: false,
  variant: 'secondary',
  totalResults: 0,
}

export default Paginator;