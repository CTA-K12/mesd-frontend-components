import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';

export default styled(Table)`
  border-collapse: collapse;

  th {
    padding: 0.7em !important;
    border: none !important;
  }

  td {
    padding: 0.6em !important;
    border-bottom: 1px solid #ececec;
  }

  tr:nth-of-type(odd) {
    td {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  @media(max-width: 576px) {
    th {
      display: none;
    }

    td {
      display: block;
      max-width: none !important;
      text-overflow: ellipsis !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      border-right: 1px solid #c8ced3;
      border-left: 1px solid #c8ced3;
      word-wrap: break-word;
    }

    td:last-child {
      margin-bottom: 1em;
      border-bottom: 1px solid #c8ced3;
    }

    td[data-header]:before {
      content: attr(data-header);
      display: block;
      float: left;
      width: 35%;
      font-weight: bold;
      text-align: left;
    }

    td.actions > .btn-group > .btn  {
      float: right;
    }

    td[data-header] > * {
      display: block;
      width: 65%;
      float: right;
      clear: right;
      padding-left: 1em;
      margin-top: 0;
      word-wrap: break-word;
    }
    
    td[data-header]:after {
      content: "",
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      border-right: 1px solid #c8ced3;
      padding-bottom: 200%;
      display: block;
    }
  }
`;