'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');
var Table = require('react-bootstrap/Table');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var Form = require('react-bootstrap/Form');
var moment = require('moment');
var Button = require('react-bootstrap/Button');
var ButtonGroup = require('react-bootstrap/ButtonGroup');
var useDebounce = require('use-debounce');
var InputGroup = require('react-bootstrap/InputGroup');
var FormControl = require('react-bootstrap/FormControl');
var client = require('@apollo/client');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var Table__default = /*#__PURE__*/_interopDefaultLegacy(Table);
var Form__default = /*#__PURE__*/_interopDefaultLegacy(Form);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var ButtonGroup__default = /*#__PURE__*/_interopDefaultLegacy(ButtonGroup);
var InputGroup__default = /*#__PURE__*/_interopDefaultLegacy(InputGroup);
var FormControl__default = /*#__PURE__*/_interopDefaultLegacy(FormControl);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _templateObject;
var GridTable = styled__default['default'](Table__default['default'])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-collapse: collapse;\n\n  th {\n    padding: 0.7em !important;\n    border: none !important;\n  }\n\n  td {\n    padding: 0.6em !important;\n    border-bottom: 1px solid #ececec;\n  }\n\n  tr:nth-of-type(odd) {\n    td {\n      background-color: rgba(0, 0, 0, 0.05);\n    }\n  }\n\n  @media(max-width: 576px) {\n    th {\n      display: none;\n    }\n\n    td {\n      display: block;\n      max-width: none !important;\n      text-overflow: ellipsis !important;\n      overflow: hidden !important;\n      white-space: nowrap !important;\n      border-right: 1px solid #c8ced3;\n      border-left: 1px solid #c8ced3;\n      word-wrap: break-word;\n    }\n\n    td:last-child {\n      margin-bottom: 1em;\n      border-bottom: 1px solid #c8ced3;\n    }\n\n    td[data-header]:before {\n      content: attr(data-header);\n      display: block;\n      float: left;\n      width: 35%;\n      font-weight: bold;\n      text-align: left;\n    }\n\n    td.actions > .btn-group > .btn  {\n      float: right;\n    }\n\n    td[data-header] > * {\n      display: block;\n      width: 65%;\n      float: right;\n      clear: right;\n      padding-left: 1em;\n      margin-top: 0;\n      word-wrap: break-word;\n    }\n    \n    td[data-header]:after {\n      content: \"\",\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 50%;\n      border-right: 1px solid #c8ced3;\n      padding-bottom: 200%;\n      display: block;\n    }\n  }\n"])));

var LoadingRow = function LoadingRow(_ref) {
  var rowSpan = _ref.rowSpan,
      colSpan = _ref.colSpan,
      key = _ref.key;
  return /*#__PURE__*/React__default['default'].createElement("tr", {
    rowSpan: rowSpan,
    key: key
  }, /*#__PURE__*/React__default['default'].createElement("td", {
    colSpan: colSpan,
    className: "text-center text-muted"
  }, /*#__PURE__*/React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faSpinner,
    pulse: true,
    size: "5x"
  })));
};

LoadingRow.propTypes = {
  rowSpan: PropTypes__default['default'].number.isRequired,
  colSpan: PropTypes__default['default'].number.isRequired,
  key: PropTypes__default['default'].string.isRequired
};
LoadingRow.defaultProps = {
  rowSpan: 1,
  colSpan: 1,
  key: 'loading'
};

var _templateObject$1;
var SortIcon = styled__default['default'](reactFontawesome.FontAwesomeIcon)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  margin-left: 0.5em;\n  color: #777777;\n  cursor: pointer;\n"])));

var Text = function Text(_ref) {
  var label = _ref.label,
      content = _ref.content;
  return /*#__PURE__*/React__default['default'].createElement("td", {
    "data-header": label
  }, /*#__PURE__*/React__default['default'].createElement("span", null, content));
};

Text.propTypes = {
  columnName: PropTypes__default['default'].string.isRequired,
  row: PropTypes__default['default'].object.isRequired,
  label: PropTypes__default['default'].string.isRequired
};

var SORT_ASC = 'ASC';
var SORT_DESC = 'DESC';

var Column = function Column(_ref) {
  var name = _ref.name,
      label = _ref.label,
      sortable = _ref.sortable,
      sort = _ref.sort,
      onSort = _ref.onSort;
  return /*#__PURE__*/React__default['default'].createElement("th", {
    "data-header": label,
    onClick: function onClick() {
      if (sortable) {
        onSort({
          name: name,
          direction: sort && sort.direction === SORT_ASC ? SORT_DESC : SORT_ASC
        });
      }
    },
    scope: "col"
  }, label, " ", sortable && /*#__PURE__*/React__default['default'].createElement(SortIcon, {
    icon: sort && sort.name === name ? sort.direction === SORT_ASC ? freeSolidSvgIcons.faSortUp : freeSolidSvgIcons.faSortDown : freeSolidSvgIcons.faSort
  }));
};

Column.propTypes = {
  name: PropTypes__default['default'].string.isRequired,
  label: PropTypes__default['default'].string,
  sortable: PropTypes__default['default'].bool,
  sort: PropTypes__default['default'].shape({
    name: PropTypes__default['default'].string,
    direction: PropTypes__default['default'].string
  }),
  onSort: PropTypes__default['default'].func.isRequired,
  component: PropTypes__default['default'].element.isRequired
};
Column.defaultProps = {
  onSearchChange: function onSearchChange(name) {},
  component: Text
};
Column.SORT_ASC = SORT_ASC;
Column.SORT_DESC = SORT_DESC;

var SortSelector = function SortSelector(_ref) {
  var onSort = _ref.onSort,
      sort = _ref.sort,
      columns = _ref.columns;
  var options = [];
  options.push( /*#__PURE__*/React__default['default'].createElement("option", {
    key: "default-option",
    value: ""
  }, "Sort"));
  columns.forEach(function (column) {
    if (column.props.sortable) {
      options.push( /*#__PURE__*/React__default['default'].createElement("option", {
        key: "".concat(column.props.name, "|ASC"),
        value: "".concat(column.props.name, "|ASC")
      }, column.props.label, " \u2191"));
      options.push( /*#__PURE__*/React__default['default'].createElement("option", {
        key: "".concat(column.props.name, "|DESC"),
        value: "".concat(column.props.name, "|DESC")
      }, column.props.label, " \u2193"));
    }
  });
  return /*#__PURE__*/React__default['default'].createElement(Form__default['default'].Control, {
    as: "select",
    value: sort ? "".concat(sort.name, "|").concat(sort.direction) : '',
    onChange: function onChange(event) {
      var value = event.target.value;

      if (value) {
        var values = value.split('|');
        onSort({
          name: values[0],
          direction: values[1]
        });
      } else {
        onSort(null);
      }
    }
  }, options);
};

SortSelector.propTypes = {
  onSort: PropTypes__default['default'].func.isRequired,
  sort: PropTypes__default['default'].shape({
    name: PropTypes__default['default'].string,
    direction: PropTypes__default['default'].string
  }),
  columns: PropTypes__default['default'].arrayOf(PropTypes__default['default'].node)
};

var _templateObject$2;
var SortSelectorWrapper = styled__default['default'].div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  @media(min-width: 577px) {\n    display: none;\n  }\n  \n  @media(max-width: 576px) {\n    margin-bottom: 1em;\n  }\n"])));

function Grid(_ref) {
  var children = _ref.children,
      loading = _ref.loading,
      data = _ref.data,
      onSort = _ref.onSort,
      sort = _ref.sort,
      page = _ref.page,
      resultsPerPage = _ref.resultsPerPage,
      externalPagination = _ref.externalPagination;
  var mappedColumns = React__default['default'].Children.map(children, function (column) {
    return /*#__PURE__*/React__default['default'].cloneElement(column, {
      sort: sort,
      onSort: onSort
    });
  }); // If the loading set is currently set to true, just show the loading row

  if (loading) {
    return /*#__PURE__*/React__default['default'].createElement(GridTable, {
      responsive: true
    }, /*#__PURE__*/React__default['default'].createElement("thead", null, /*#__PURE__*/React__default['default'].createElement("tr", null, mappedColumns)), /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement(LoadingRow, {
      colSpan: React__default['default'].Children.count(children),
      rowSpan: resultsPerPage
    })));
  } // Process the data into the rows and cols


  var offset = (page - 1) * resultsPerPage;
  var rowData = externalPagination ? data : data.slice(offset, offset + resultsPerPage);
  var rows = rowData.map(function (item, index) {
    var row = React__default['default'].Children.map(children, function (column) {
      var Cell = column.props.component;
      var keys = column.props.name.split('.');
      var content = item;

      for (var i = 0; i < keys.length && content; i++) {
        content = content[keys[i]];
      }

      return /*#__PURE__*/React__default['default'].createElement(Cell, {
        key: "".concat(column.props.name, "-").concat(index),
        columnName: column.props.name,
        content: content,
        row: item,
        label: column.props.label
      });
    });
    return /*#__PURE__*/React__default['default'].createElement("tr", {
      key: "row".concat(index)
    }, row);
  });
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(SortSelectorWrapper, null, /*#__PURE__*/React__default['default'].createElement(SortSelector, {
    columns: children,
    onSort: onSort,
    sort: sort
  })), /*#__PURE__*/React__default['default'].createElement(GridTable, null, /*#__PURE__*/React__default['default'].createElement("thead", null, /*#__PURE__*/React__default['default'].createElement("tr", null, mappedColumns)), /*#__PURE__*/React__default['default'].createElement("tbody", null, rows)));
}

Grid.propTypes = {
  children: PropTypes__default['default'].array.isRequired,
  loading: PropTypes__default['default'].bool,
  data: PropTypes__default['default'].array,
  onSort: PropTypes__default['default'].func,
  resultsPerPage: PropTypes__default['default'].number,
  externalPagination: PropTypes__default['default'].bool
};
Grid.defaultProps = {
  loading: false,
  data: [],
  resultsPerPage: 15,
  externalPagination: false
};
Grid.Column = Column;

var _templateObject$3, _templateObject2;
var TrueIcon = styled__default['default'](reactFontawesome.FontAwesomeIcon)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  color: #2eb85c;\n"])));
var FalseIcon = styled__default['default'](reactFontawesome.FontAwesomeIcon)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #e55353;  \n"])));

var Boolean = function Boolean(_ref) {
  var label = _ref.label,
      content = _ref.content;
  return /*#__PURE__*/React__default['default'].createElement("td", {
    "data-header": label
  }, /*#__PURE__*/React__default['default'].createElement("span", null, content ? /*#__PURE__*/React__default['default'].createElement(TrueIcon, {
    icon: freeSolidSvgIcons.faCheck
  }) : /*#__PURE__*/React__default['default'].createElement(FalseIcon, {
    icon: freeSolidSvgIcons.faTimes
  })));
};

Boolean.propTypes = {
  columnName: PropTypes__default['default'].string.isRequired,
  row: PropTypes__default['default'].object.isRequired,
  label: PropTypes__default['default'].string.isRequired
};

var DateCell = function DateCell(format) {
  var Date = function Date(_ref) {
    var label = _ref.label,
        content = _ref.content;
    return /*#__PURE__*/React__default['default'].createElement("td", {
      "data-header": label
    }, /*#__PURE__*/React__default['default'].createElement("span", null, content ? moment__default['default'](content).format(format) : ' '));
  };

  Date.propTypes = {
    columnName: PropTypes__default['default'].string.isRequired,
    row: PropTypes__default['default'].object.isRequired,
    label: PropTypes__default['default'].string.isRequired
  };
  return Date;
};

var Money = function Money(_ref) {
  var content = _ref.content,
      label = _ref.label;
  var formatted = isNaN(content) ? ' ' : content >= 0 ? content.toFixed(2) : "(".concat(Math.abs(content).toFixed(2), ")");
  return /*#__PURE__*/React__default['default'].createElement("td", {
    "data-header": label
  }, /*#__PURE__*/React__default['default'].createElement("span", null, formatted));
};

Money.propTypes = {
  columnName: PropTypes__default['default'].string.isRequired,
  row: PropTypes__default['default'].object.isRequired,
  label: PropTypes__default['default'].string.isRequired
};

var _templateObject$4;
var ActionButton = styled__default['default'](Button__default['default'])(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  padding: 0.2rem 0.4rem !important;\n  font-size: 0.71rem !important;\n  line-height: 1.5 !important;\n  border-radius: 0.2rem;\n"])));

var ActionsCell = function ActionsCell(actions) {
  var GeneratedActionsCell = function GeneratedActionsCell(_ref) {
    var label = _ref.label,
        content = _ref.content;
    var mappedActions = actions.map(function (action) {
      return /*#__PURE__*/React__default['default'].createElement(ActionButton, {
        onClick: function onClick() {
          return action.action(content);
        },
        variant: action.variant ? action.variant : 'secondary'
      }, /*#__PURE__*/React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, {
        icon: action.icon
      }));
    });
    return /*#__PURE__*/React__default['default'].createElement("td", {
      "data-header": label
    }, /*#__PURE__*/React__default['default'].createElement("span", null, /*#__PURE__*/React__default['default'].createElement(ButtonGroup__default['default'], {
      "aria-label": "Row Actions"
    }, mappedActions)));
  };

  GeneratedActionsCell.propTypes = {
    columnName: PropTypes__default['default'].string.isRequired,
    row: PropTypes__default['default'].object.isRequired,
    label: PropTypes__default['default'].string
  };
  GeneratedActionsCell.defaultProps = {
    sortable: false,
    label: ''
  };
  return GeneratedActionsCell;
};

ActionsCell.propTypes = {
  actions: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    icon: PropTypes__default['default'].any.isRequired,
    action: PropTypes__default['default'].func.isRequired,
    variant: PropTypes__default['default'].string
  }))
};

var Paginator = function Paginator(_ref) {
  var onPageChange = _ref.onPageChange,
      resultsPerPage = _ref.resultsPerPage,
      totalResults = _ref.totalResults,
      page = _ref.page,
      cursorBased = _ref.cursorBased,
      variant = _ref.variant,
      hasNextPage = _ref.hasNextPage,
      hasPreviousPage = _ref.hasPreviousPage;
  var lastPage = totalResults ? Math.ceil(totalResults / resultsPerPage) : 1;
  var hasPrev = cursorBased ? hasPreviousPage : page > 1;
  var hasNext = cursorBased ? hasNextPage : page < lastPage;
  return /*#__PURE__*/React__default['default'].createElement(ButtonGroup__default['default'], {
    "aria-label": "Page Controls",
    className: "float-right"
  }, !cursorBased && /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    variant: variant,
    onClick: function onClick() {
      return onPageChange(1);
    },
    disabled: page === 1
  }, /*#__PURE__*/React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faAngleDoubleLeft
  })), /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    variant: variant,
    onClick: function onClick() {
      return onPageChange(page - 1);
    },
    disabled: !hasPrev
  }, /*#__PURE__*/React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faAngleLeft
  })), /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    variant: variant,
    disabled: true
  }, cursorBased ? page : "".concat(page, " / ").concat(lastPage)), /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    variant: variant,
    onClick: function onClick() {
      return onPageChange(page + 1);
    },
    disabled: !hasNext
  }, /*#__PURE__*/React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faAngleRight
  })), !cursorBased && /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    variant: variant,
    onClick: function onClick() {
      return onPageChange(lastPage);
    },
    disabled: page >= lastPage
  }, /*#__PURE__*/React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faAngleDoubleRight
  })));
};

Paginator.propTypes = {
  onPageChange: PropTypes__default['default'].func.isRequired,
  page: PropTypes__default['default'].number.isRequired,
  resultsPerPage: PropTypes__default['default'].number,
  totalResults: PropTypes__default['default'].number,
  cursorBased: PropTypes__default['default'].bool,
  variant: PropTypes__default['default'].oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'])
};
Paginator.defaultProps = {
  cursorBased: false,
  variant: 'secondary',
  totalResults: 0
};

var _templateObject$5;
var SearchBoxInputGroup = styled__default['default'](InputGroup__default['default'])(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n"])));

var SearchBox = function SearchBox(_ref) {
  var onSearch = _ref.onSearch;

  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useDebounce = useDebounce.useDebounce(search, 500),
      _useDebounce2 = _slicedToArray(_useDebounce, 1),
      debouncedSearch = _useDebounce2[0];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dirty = _useState4[0],
      setDirty = _useState4[1];

  React.useEffect(function () {
    if (dirty) {
      onSearch(debouncedSearch);
    }
  }, [debouncedSearch]);

  var onSearchTextChanged = function onSearchTextChanged(event) {
    setDirty(true);
    setSearch(event.target.value);
  };

  var onSearchTextCleared = function onSearchTextCleared() {
    setSearch("");
  };

  return /*#__PURE__*/React__default['default'].createElement("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/React__default['default'].createElement(SearchBoxInputGroup, null, /*#__PURE__*/React__default['default'].createElement(InputGroup__default['default'].Prepend, null, /*#__PURE__*/React__default['default'].createElement(InputGroup__default['default'].Text, null, /*#__PURE__*/React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faSearch
  }))), /*#__PURE__*/React__default['default'].createElement(FormControl__default['default'], {
    onChange: onSearchTextChanged,
    value: search,
    "aria-label": "Search"
  }), /*#__PURE__*/React__default['default'].createElement(InputGroup__default['default'].Append, null, /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    onClick: onSearchTextCleared,
    variant: "secondary"
  }, /*#__PURE__*/React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faTimes
  })))));
};

SearchBox.propTypes = {
  onSearch: PropTypes__default['default'].func.isRequired
};

var ApolloGrid = function ApolloGrid(_ref) {
  var query = _ref.query,
      children = _ref.children,
      resultsPerPage = _ref.resultsPerPage,
      extractRows = _ref.extractRows,
      extractTotal = _ref.extractTotal,
      constructVariables = _ref.constructVariables,
      additionalVariables = _ref.additionalVariables;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      sort = _useState2[0],
      setSort = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = React.useState(1),
      _useState6 = _slicedToArray(_useState5, 2),
      page = _useState6[0],
      setPage = _useState6[1];

  var _useQuery = client.useQuery(query, constructVariables(page, search, sort, resultsPerPage, additionalVariables)),
      loading = _useQuery.loading;
      _useQuery.error;
      var data = _useQuery.data,
      fetchMore = _useQuery.fetchMore;

  var isFirstRun = React.useRef(true);
  React.useEffect(function () {
    if (!isFirstRun.current) {
      fetchMore(_objectSpread2(_objectSpread2({
        query: query
      }, constructVariables(page, search, sort, resultsPerPage, additionalVariables)), {}, {
        updateQuery: function updateQuery(previousResult, _ref2) {
          var fetchMoreResult = _ref2.fetchMoreResult;
          return fetchMoreResult;
        }
      }));
    } else {
      isFirstRun.current = false;
    }
  }, [sort, search, page]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(SearchBox, {
    onSearch: setSearch
  }), /*#__PURE__*/React__default['default'].createElement(Grid, {
    loading: loading,
    data: loading ? [] : extractRows(data),
    sort: sort,
    page: page,
    resultsPerPage: resultsPerPage,
    onSort: setSort,
    externalPagination: true
  }, children), /*#__PURE__*/React__default['default'].createElement(Paginator, {
    page: page,
    onPageChange: setPage,
    resultsPerPage: resultsPerPage,
    totalResults: loading ? 0 : extractTotal(data)
  }));
};

ApolloGrid.propTypes = {
  query: PropTypes__default['default'].any.isRequired,
  children: PropTypes__default['default'].array,
  resultsPerPage: PropTypes__default['default'].number,
  extractRows: PropTypes__default['default'].func,
  extractType: PropTypes__default['default'].func,
  constructVariables: PropTypes__default['default'].func,
  additionVariables: PropTypes__default['default'].object,
  fetchPolicy: PropTypes__default['default'].oneOf(['network-only', 'cache-first', 'cache-only', 'cache-and-network', 'no-cache', 'standy'])
};
ApolloGrid.defaultProps = {
  additionalVariables: {},
  resultsPerPage: 15,
  fetchPolicy: 'network-only',
  extractRows: function extractRows(data) {
    var rows = [];

    for (var property in data) {
      if (data[property]) {
        rows = rows.concat(data[property].edges.map(function (edge) {
          return edge.node;
        }));
      }
    }

    return rows;
  },
  extractTotal: function extractTotal(data) {
    var total = 0;

    for (var property in data) {
      if (data[property] && data[property].pageInfo) {
        total = total + data[property].pageInfo.total;
      }
    }

    return total;
  },
  constructVariables: function constructVariables(page, search, sort, resultsPerPage, additionalVariables) {
    return {
      variables: _objectSpread2({
        search: search,
        offset: (page - 1) * resultsPerPage,
        limit: resultsPerPage,
        sortAttribute: sort ? sort.name : null,
        sortDirection: sort ? sort.direction : null
      }, additionalVariables)
    };
  }
};
ApolloGrid.Column = Column;

exports.ActionsCell = ActionsCell;
exports.ApolloGrid = ApolloGrid;
exports.BooleanCell = Boolean;
exports.DateCell = DateCell;
exports.Grid = Grid;
exports.GridColumn = Column;
exports.GridLoadingRow = LoadingRow;
exports.GridTable = GridTable;
exports.MoneyCell = Money;
exports.Paginator = Paginator;
exports.SearchBox = SearchBox;
exports.SortIcon = SortIcon;
exports.TextCell = Text;
