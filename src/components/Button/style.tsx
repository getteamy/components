import styled from 'styled-components'
import colors from '../Colors'

export enum VARIATIONS {
    DANGER = 'danger',
    LINK = 'link',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    WARNING = 'warning',
}

export default styled.button`
    font-size: 1em;
    height: 48px;
    background-color: #${colors.blue.primary};
    color: white;
    border-radius: 5px;
    padding: 0 16px;
    border: 0;
    cursor: pointer;
    outline: none;

    :hover {
        background-color: #4365CC;
    }

    :active {
        background-color: #${colors.blue.dark};
        transition: none;
    }
`
