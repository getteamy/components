import { mount } from 'enzyme'
import 'jest-styled-components'
import React from 'react'

import Button from './'
import { StyledButton, StyledLoader } from './style'

describe('Button', () => {
    it('renders itself', () => {
        const button = mount(<Button>text</Button>)
        expect(button.find(Button)).toHaveLength(1)
    })

    it('renders its text', () => {
        const text = 'text'
        const button = mount(<Button>{text}</Button>)
        expect(button.text()).toEqual(text)
    })

    it('is disabled', () => {
        const button = mount(<Button disabled>text</Button>)
        expect(button.find(StyledButton).props()).toHaveProperty('disabled', true)
        expect(button.find('button').props()).toHaveProperty('disabled', true)
    })

    it('is loading', () => {
        const button = mount(<Button loading>text</Button>)
        expect(button.find(StyledButton).props()).toHaveProperty('loading', true)
        expect(button.find(StyledLoader)).toHaveLength(1)
    })
})