import styled from 'styled-components'
import color from '../../assets/color/color'

const Form = styled.div`
    height: 50px;
    width: ${props => props.size.width};
    display: flex;

    input{
        width: 80%;
        height: inherit;
        border: none;
        border-radius: 5px 0 0 5px;
        font-size: 20px;
        font-family: inherit;
        color: ${color.main};
        padding-left: 10px;
        position: relative;
    }
    input::placeholder{
        color:rgba(0, 0, 0, 0.15); 
    }

    button{
        width: 20%;
        height: inherit;
        border: none;
        background: #fff;
        border-radius: 0 5px 5px 0;
        font-family: inherit;
        color: ${color.main};
    }
`

export default Form