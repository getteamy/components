import React from 'react'
import StyledButton from './style'

interface ButtonProps {
    children: string
}

const Button = ({children} : ButtonProps) => (
    <StyledButton>{children}</StyledButton>
)

export default Button