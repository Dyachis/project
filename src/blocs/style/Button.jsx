import styled from 'styled-components'
import color from '../../assets/color/color'

const Button = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 5px;
    font-family: inherit;
    font-size: inherit;

    color: ${props => props.primary ? color.main : '#ffff'};
    background: ${props => props.primary ? '#ffff' : color.main};
    border: 1px solid ${color.main};
`

export default Button