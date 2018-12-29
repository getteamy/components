import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './'
import { VARIATIONS } from './style';

storiesOf('Button', module)
  .add('primary with text', () => (
    <Button variation={VARIATIONS.PRIMARY}>Submit</Button>
  ))
  .add('danger with text', () => (
    <Button variation={VARIATIONS.DANGER}>Submit</Button>
  ))
  .add('link with text', () => (
    <Button variation={VARIATIONS.LINK}>Submit</Button>
  ))
  .add('secondary with text', () => (
    <Button variation={VARIATIONS.SECONDARY}>Submit</Button>
  ))