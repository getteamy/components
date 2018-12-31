import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './'
import { VARIATIONS } from './style'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: flex-start;
  grid-gap: 8px;
`

storiesOf('Button', module)
  .add('regular', () => (
    <ButtonWrapper>
      {Object.keys(VARIATIONS).map(
        variation => (
          <Button variation={VARIATIONS[variation]}>{VARIATIONS[variation]}</Button>
        )
      )}
    </ButtonWrapper>
  ))
  .add('disabled', () => (
    <ButtonWrapper>
      {Object.keys(VARIATIONS).map(
        variation => (
          <Button disabled variation={VARIATIONS[variation]}>{VARIATIONS[variation]}</Button>
        )
      )}
    </ButtonWrapper>
  ))
  .add('loading', () => (
    <ButtonWrapper>
      {Object.keys(VARIATIONS).filter(key => !['SECONDARY','LINK'].includes(key)).map(
        variation => (
          <Button loading variation={VARIATIONS[variation]}>{VARIATIONS[variation]}</Button>
        )
      )}
    </ButtonWrapper>
  ))