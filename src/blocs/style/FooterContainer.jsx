import styled from 'styled-components'
import color from '../../assets/color/color'

const Footer = styled.div`
    max-width: 1920px;
    padding: 40px 277px;
    background: ${color.main};

    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;

    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }

    li{
        margin-bottom: 12px;
        text-align: right;
        font-size: 20px;
    }
    li:last-child{
        margin-bottom: 0;
    }

    div:first-child{
        display: flex;
        flex-direction:column;
        justify-content: space-between;

    }

    div:last-child{
        align-self: end;
        justify-self: end;
    }

    div:last-child img{
        margin-bottom: 40px;
    }
    div:last-child img:nth-child(2){
        float: right;
    }
`

export default Footer