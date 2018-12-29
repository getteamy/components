import React from 'react'
import StyledButton, { VARIATIONS } from './style'

interface ButtonProps {
    children: string
    variation: VARIATIONS
}

const Button = ({children, variation} : ButtonProps) => (
    <StyledButton variation={variation}>{children}</StyledButton>
)

export default Button