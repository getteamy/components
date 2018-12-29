import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './'
import { VARIATIONS } from './style';

Object.keys(VARIATIONS).map(
  variation => {
    storiesOf('Button', module)
      .add(VARIATIONS[variation], () => (
        <Button variation={VARIATIONS[variation]}>Submit</Button>
      ))
  }
)