import styled from 'styled-components'
import colors from '../Colors'

export enum VARIATIONS {
    DANGER = 'danger',
    LINK = 'link',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
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
    variation: VARIATIONS
}

export default styled.button<StyledButtonProps>`
    font-size: 1em;
    height: 48px;
    background-color: ${props => getColorFromVariation(props.variation).backgroundColor};
    color: #${props => getColorFromVariation(props.variation).color};
    border-radius: 5px;
    padding: 0 16px;
    border: 0;
    cursor: pointer;
    outline: none;

    :hover {
        filter: brightness(0.9) contrast(1.2);
    }

    :active {
        filter: brightness(0.8) contrast(1.2);
    }
`