import React from 'react'
import StyledButton from './style'

interface ButtonProps {
    children: string
    // onClick: (event: React.MouseEvent<HTMLElement>) => any
}

const Button = ({children} : ButtonProps) => (
    <StyledButton>{children}</StyledButton>
)

export default Button