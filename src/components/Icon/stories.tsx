import { storiesOf } from '@storybook/react'
import Icon from './'
import React from 'react'

const EXAMPLE_ICONS = [
    'check_circle',
    'face',
    'favorite',
    'info',
    'label',
    'movie',
    'volume_up'
]

storiesOf('Icons', module)
    .add('icons', () => (
        EXAMPLE_ICONS.map(
            icon => <Icon icon={icon}></Icon>
        )
    ))