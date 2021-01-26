import React from 'react';

import {
  CCard,
  CCardBody
} from '@coreui/react';

import SearchBox from '../../components/Grid/SearchBox';

export default {
  component: SearchBox,
  title: 'GridSearchBox',
  argTypes: { onSearch: { action: 'onSearch' } }
}

const Template = args => (
  <CCard>
    <CCardBody>
      <SearchBox {...args} />
    </CCardBody>
  </CCard>
)

export const Default = Template.bind({});
Default.args = {

}