import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import colors from '../Colors'

export enum VARIATIONS {
    DANGER = 'danger',
    PRIMARY = 'primary',
    SUCCESS = 'success',
    SECONDARY = 'secondary',
    LINK = 'link',
}

const COLORS = {
    [VARIATIONS.DANGER]: colors.red.primary,
    [VARIATIONS.LINK]: colors.blue.primary,
    [VARIATIONS.PRIMARY]: colors.blue.primary,
    [VARIATIONS.SECONDARY]: colors.light.primary,
    [VARIATIONS.SUCCESS]: colors.green.primary,
}

interface Colors {
    backgroundColor: string
    color: string
}

const getColorFromVariation = (variation: VARIATIONS) : Colors => {
    const mainColor = COLORS[variation]
    const backgroundColor = variation === VARIATIONS.LINK ? 'rgba(0,0,0,0)' : `#${mainColor}`
    let color = colors.light.white
    switch (variation) {
        case VARIATIONS.LINK:
            color = mainColor
            break
        case VARIATIONS.SECONDARY: 
            color = colors.gray.dark
            break
    }
    return {
        backgroundColor,
        color
    }
}

interface StyledButtonProps {
    variation?: VARIATIONS
    disabled?: boolean
    loading?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
    ${props => {
            return (css`
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1em;
                height: 48px;
                background-color: ${getColorFromVariation(props.variation || VARIATIONS.PRIMARY).backgroundColor};
                color: #${getColorFromVariation(props.variation || VARIATIONS.PRIMARY).color};
                border-radius: 5px;
                padding: 0 16px;
                border: 0;
                outline: none;
                width: fit-content;
                text-transform: capitalize;

                ${props.disabled && 
                    `
                    opacity: 0.4;
                    `
                }

                ${!props.disabled && 
                    `
                    cursor: pointer;
                    :hover {
                        filter: brightness(0.9) contrast(1.2);
                    }
                
                    :focus {
                        filter: brightness(0.8) contrast(1.2);
                    }
                    `
                }

                ${props.loading && 
                    `
                    cursor: wait;
                    color: rgba(255,255,255,0);

                    :hover, :focus {
                        filter: unset
                    }
                    `
                }
            `)
        }
    }
`

interface DotProps {
    delay?: number
}

const dotAnimation = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(-100%);
    }
`

const Dot = styled.div<DotProps>`
    ${props => {
        return css`
            width: 4px;
            height: 4px;
            border-radius: 4px;
            background-color: rgba(255,255,255,0.64);
            animation: ${dotAnimation} 0.5s ${props.delay || 0}s infinite alternate both;
        `
    }}
`

const Loader = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 24px;
`

export const StyledLoader = () => (
    <Loader>
        <Dot/>
        <Dot delay={0.15}/>
        <Dot delay={0.3}/>
    </Loader>
)