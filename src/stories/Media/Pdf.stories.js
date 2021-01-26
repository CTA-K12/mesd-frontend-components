import React from 'react';

import {
  CCard,
  CCardBody
} from '@coreui/react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pdf from '../../components/Media/Pdf';

storiesOf('PDFViewer', module)
  .add('default', () => (<CCard><CCardBody><Pdf /></CCardBody></CCard>))