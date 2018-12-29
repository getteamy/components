import React from 'react'
import StyledButton, { VARIATIONS } from './style'

interface ButtonProps {
    children: string
    variation: VARIATIONS
    disabled?: boolean
    loading?: boolean
}

const Button = ({children, variation, disabled, loading} : ButtonProps) => (
    <StyledButton loading={loading} disabled={disabled} variation={variation}>{children}</StyledButton>
)

export default Button