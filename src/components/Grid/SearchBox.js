import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDebounce } from 'use-debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchBoxInputGroup = styled(InputGroup)`
  margin-bottom: 10px;
`;

const SearchBox = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (dirty) {
      onSearch(debouncedSearch);
    }
  }, [debouncedSearch]);

  const onSearchTextChanged = (event) => {
    setDirty(true);
    setSearch(event.target.value);
  }

  const onSearchTextCleared = () => {
    setSearch("");
  }

  return (
    <form onSubmit={(e) => {
      return e.preventDefault();
    }}>
      <SearchBoxInputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
        </InputGroup.Prepend>

        <FormControl
          onChange={onSearchTextChanged}
          value={search}
          aria-label="Search"
        />

        <InputGroup.Append>
          <Button onClick={onSearchTextCleared} variant="secondary">
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </InputGroup.Append>
      </SearchBoxInputGroup>
    </form>
  );
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchBox;