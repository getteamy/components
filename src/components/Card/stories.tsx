import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import Card from './'

const Wrapper = styled.div`
    width: 500px;
    height: 500px
`

storiesOf('Card', module)
    .add('default', () => (
        <Wrapper>
            <Card title={'Card component'}/>
        </Wrapper>
    ))