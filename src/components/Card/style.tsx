import styled from 'styled-components'

interface StyledCardProps {
    width: number,
    height: number
}

export default styled.div<StyledCardProps>`
    ${
        props => `
            width: ${props.width}px;
            height: ${props.height}px;
            background-color: white;
            border-radius: 5px;
            transition: .4s cubic-bezier(0.4, 0.0, 0.2, 1);
        `
    }
`