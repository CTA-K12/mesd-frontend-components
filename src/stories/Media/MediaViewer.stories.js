import React from 'react';

import {
  CCard,
  CCardBody
} from '@coreui/react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MediaViewer from '../../components/Media/MediaViewer';

storiesOf('MediaViewer', module)
  .add('default', () => (<CCard><CCardBody><MediaViewer /></CCardBody></CCard>))