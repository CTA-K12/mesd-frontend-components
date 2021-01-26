import React, { useState } from 'react';
import {
  CCard,
  CCardBody
} from '@coreui/react';
import moment from 'moment';

import { Grid, GridColumn, MoneyCell, BooleanCell, DateCell, ActionsCell, SearchBox, Paginator } from '../../index.js';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';

export default {
  component: Grid,
  title: 'Grid',
  argTypes: { 
    onView: { action: 'onView' }, 
    onEdit: { action: 'onEdit' },
  },
};

const Template = args => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(null);
  const [search, setSearch] = useState('');

  const FormattedDateCell = DateCell(args.dateFormat);
  const FormattedActionsCell = ActionsCell([
    { icon: faEye, action: (id) => args.onView(id)},
    { icon: faEdit, action: (id) => args.onEdit(id)},
  ]);

  let data = args.data;
  if (search && search.length > 0) {
    const regex = new RegExp(search, 'i', 'g');
    data = data.filter(({ flavor }) => flavor.match(regex));
  }
  if (sort) {
    data = data.sort((a, b) => sort.direction === GridColumn.SORT_ASC ? (a[sort.name] > b[sort.name] ? 1 : -1) : (a[sort.name] < b[sort.name] ? 1 : -1))
  }

  return (
    <CCard>
      <CCardBody>
        <SearchBox onSearch={setSearch} />
        <Grid {...args} data={data} page={page} sort={sort} onSort={setSort}>
          <GridColumn name="id" label="" sortable={false} component={FormattedActionsCell} />
          <GridColumn name="flavor" label="Flavor" sortable={true} />
          <GridColumn name="cost" label="Cost" sortable={true} component={MoneyCell} />
          <GridColumn name="available" label="Available" sortable={true} component={BooleanCell} />
          <GridColumn name="restock" label="Restock" sortable={true} component={FormattedDateCell} />
        </Grid>
        <Paginator {...args} onPageChange={setPage} page={page} totalResults={data.length} />
      </CCardBody>
    </CCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  loading: false,
  resultsPerPage: 5,
  dateFormat: 'MMM Do YYYY',
  data: [
    { id: 1, flavor: 'Chocolate', cost: 3.25, available: true, restock: null },
    { id: 2, flavor: 'Vanilla', cost: 3, available: true, restock: null },
    { id: 3, flavor: 'Caramel', cost: -3.15, available: false, restock: moment('2035-05-10') },
    { id: 4, flavor: 'Strawberry', cost: 3.25, available: true, restock: null },
    { id: 5, flavor: 'Blueberry', cost: 3.25, available: true, restock: null },
    { id: 6, flavor: 'Coconut', cost: 3.5, available: true, restock: null },
    { id: 7, flavor: 'Lavendar', cost: -3.5, available: false, restock: moment('2033-06-18') },
    { id: 8, flavor: 'Cookie Dough', cost: 3.75, available: true, restock: null },
    { id: 9, flavor: 'Mint Chocolate', cost: -3.75, available: false, restock: null },
    { id: 10, flavor: 'Birthday Cake', cost: 3.75, available: true, restock: null },
    { id: 11, flavor: 'Chocolate Peanut Butter', cost: 3.85, available: true, restock: null },
    { id: 12, flavor: 'Bourbon Vanilla', cost: 3.85, available: false, restock: moment('2025-10-10') },
  ],
}