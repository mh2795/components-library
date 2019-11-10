import React from 'react';
import { storiesOf } from '@storybook/react';
import Thumbnail from './Thumbnails';

storiesOf('Thumbnail', module)
  .add('Vertical Block w/Border', () => <Thumbnail vertical border />)
  .add('Vertical Block w/Fill', () => <Thumbnail vertical fill />)
  .add('Horizontal Block w/Border', () => <Thumbnail horizontal border />)
  .add('Inline', () => <Thumbnail inline />)