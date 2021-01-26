import React from 'react';

import {
  CCard,
  CCardBody,
} from '@coreui/react';

import Paginator from '../../components/Grid/Paginator';

export default {
  component: Paginator,
  title: 'GridPaginator',
  argTypes: { onPageChange: { action: 'onPageChange' } }
}

const Template = args => (
  <CCard>
    <CCardBody>
      <Paginator {...args} />
    </CCardBody>
  </CCard>
);

export const Default = Template.bind({});
Default.args = {
  page: 2,
  resultsPerPage: 5,
  totalResults: 13,
  cursorBased: false,
  variant: 'secondary',
}

export const Cursor = Template.bind({});
Cursor.args = {
  ...Default.args,
  cursorBased: true,
  hasNextPage: true,
  hasPreviousPage: true, 
}