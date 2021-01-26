import React from 'react';
import { MockedProvider } from '@apollo/client/testing';

import '@coreui/coreui/dist/css/coreui.css';

export const parameters = {
  apolloClient: {
    MockedProvider,
    addTypename: false,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
}