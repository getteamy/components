import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './'

export enum variations {
  PRIMARY = 'primary',
  DANGER = 'danger',
  SUCCESS = 'success',
  DISCREET = 'discreet'
}

storiesOf('Button', module)
  .add('primary with text', () => (
    <Button>Submit</Button>
  ))