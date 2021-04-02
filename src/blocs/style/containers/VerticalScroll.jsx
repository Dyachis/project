import styled from 'styled-components'
import color from '../../../assets/color/color'

const VerticalScroll = styled.div`

    width: 500px;
    max-height: 940px;
    overflow: scroll;
    color: #fff;
    position: relative;

    .card{
        height: 300px;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
    }

    .card:last-child{
        margin-bottom: 0;
    }

    img{
        position: absolute;
        z-index: -10;
    }

    .payload{
        padding: 10px 20px;
        border-radius: 0 0 5px 5px;
        position: absolute;
        bottom: 0;
        height: 100px;
        background-color: ${color.main};
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas: 
        'a b1 c'
        'a b2 c'
        'a b3 c';
        align-items: center;
    }

    .payload div{
        display: flex;
    }

    .payload img{
        z-index: 10;
        position: relative;
        height: 20px;
        width: 20px;
        margin-right: 9px;
    }

    .name{
        grid-area: a;
    }
    .area{
        grid-area: b1;
    }
    .bads{
        grid-area: b2;
    }
    .baths{
        grid-area: b3;
    }
    .price{
        grid-area: c;
        margin-left: auto;
    }
`

export default VerticalScroll