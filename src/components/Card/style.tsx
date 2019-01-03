import React from 'react'
import styled from 'styled-components'

interface CardContainerProps {
    width?: number,
    height?: number
}

interface StyledCardProps extends CardContainerProps {
    title?: string
}

const CardContainer = styled.div<CardContainerProps>`
    ${
        props => `
            width: ${props.width ? props.width + 'px' : '100%'};
            height: ${props.height ? props.height + 'px' : '100%'};
            background-color: white;
            border-radius: 5px;
            transition: .4s cubic-bezier(0.4, 0.0, 0.2, 1);
            padding: 32px;
            box-sizing: border-box;
            
            :hover {
                box-shadow: 0 20px 40px 0 rgba(0,0,0,0.08);
            }
        `
    }
`

const Title = styled.h1`
    ${
        props => `
            font-family: AvenirNext-Medium;
            font-size: 16px;
            color: #212B36;
            letter-spacing: 0;
            line-height: 24px;
            margin: 0;
            pointer-events: none;
        `
    }
`

export default ({title} : StyledCardProps) => (
    <CardContainer>
        <Title>Title</Title>
    </CardContainer>
)