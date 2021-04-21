import styled from 'styled-components'
import color from '../../assets/color/color'

const Button = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 5px;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 0;
    margin-left: 10px;

    color: ${props => props.primary ? color.main : '#ffff'};
    background: ${props => props.primary ? '#ffff' : color.main};
    border: 1px solid ${color.main};

    &:hover{
        color: ${props => props.primary ? '#ffff' : color.main};;
        border: 1px solid ${props => props.primary ? '#ffff' : color.main};
    }

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 0;
        background-color: ${props => props.primary ? color.main : '#ffff'};
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 0 0 50% 50%;
        transition: ease-in-out 0.3s;
        color: ${props => props.primary ? '#ffff' : color.main};
    }

    &:hover::before{
        height: 100%;
    }
`

export default Button