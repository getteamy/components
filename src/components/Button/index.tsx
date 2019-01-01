import React from 'react'
import { StyledButton, StyledLoader, VARIATIONS } from './style'

interface ButtonProps {
    children: string
    variation: VARIATIONS
    disabled?: boolean
    loading?: boolean
}

export default ({children, variation, disabled, loading} : ButtonProps) => (
    <StyledButton loading={loading} disabled={disabled} variation={variation}>
        {children}
        {loading && <StyledLoader/>}
    </StyledButton>
)