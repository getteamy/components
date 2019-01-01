import { storiesOf } from '@storybook/react'
import React from 'react'
import Card from './'

storiesOf('Card', module)
    .add('default', () => (
        <Card width={512} height={512} />
    ))