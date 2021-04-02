import styled from 'styled-components'
import color from '../../assets/color/color'

const Form = styled.div`
    height: 50px;
    width: ${props => props.size.width};
    display: flex;
    position: relative;

    input{
        width: 100%;
        height: inherit;
        border: none;
        border-radius: 5px;
        font-size: 20px;
        font-family: inherit;
        color: ${color.main};
        padding-left: 10px;
    }
    input::placeholder{
        color:rgba(0, 0, 0, 0.15); 
    }

    .drpdown{
        position: absolute;
        top: 50px;
        width: 100%;
        text-align: start;
        background: ${color.main};
        color: white;
        padding: 20px;
        font-size: 20px;
        border-radius: 5px;
        display: none;
    }

    &:hover .drpdown{
        display: block;
    }

    p{
        cursor: pointer;
    }

    .drpdown__rooms{
        width: 400px;
    }
    
    .rooms{
        display: flex;
        color: ${color.main};
        justify-content: space-around;
        margin: 0;
    }

    .rooms div{
        text-align: center;
        background: #fff;
        border-radius: 5px;
        width: 50px;
        height: 50px;
        margin: 0;
        padding-top: 12.5px;
    }

    .rooms div:hover{
        background: ${color.secondary};
        color: #fff;
    }
`

export default Form