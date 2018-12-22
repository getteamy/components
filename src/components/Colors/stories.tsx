import { storiesOf } from '@storybook/react'
import React from 'react'

import colors from './'

storiesOf('Colors', module)
    .add('colors', () => (
        <div>
            {
                Object.keys(colors).map(
                    color => (
                        Object.keys(colors[color]).map(
                            shade => (
                                <div style={{width: '50px', height: '50px', backgroundColor: '#'+colors[color][shade]}}></div>
                            )
                        )
                    )
                )
            }
        </div>
    ))