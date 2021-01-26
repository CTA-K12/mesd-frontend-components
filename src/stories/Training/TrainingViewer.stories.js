import React from 'react';

import {
  CCard,
  CCardBody
} from '@coreui/react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TrainingViewer from '../../components/Training/TrainingViewer';

storiesOf('TrainingViewer', module)
  .add('default', () => (<CCard><CCardBody><TrainingViewer /></CCardBody></CCard>))