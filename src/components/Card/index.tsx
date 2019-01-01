import React, { ReactNode } from 'react'
import StyledCard from './style'

interface CardProps {
    children?: ReactNode
    width: number
    height: number
    title?: string
}

export default ({children, width, height, title} : CardProps) => (
    <StyledCard title={title} width={width} height={height}>{children}</StyledCard>
)