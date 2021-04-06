import styled from 'styled-components'
import color from '../../assets/color/color'

const ArrBtns = styled.div`


        position: absolute;
        z-index: 10;
        height: 20px;
        width: 20px;
        border: 1px solid ${color.main};
        border-width: 4px 0 0 4px;
        cursor: pointer;
        top: 425px;
        left: ${props => props.left ? '250px' : '1650px'};
        transform: ${props => props.left ? 'rotate(-45deg)' : 'rotate(135deg)'};

        &:hover{
                transform: scale(1.5) ${props => props.left ? 'rotate(-45deg)' : 'rotate(135deg)'};
                transition: transform ease-out 0.35s;
        }

`
export default ArrBtns