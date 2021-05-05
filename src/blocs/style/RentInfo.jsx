import styled from 'styled-components'
import color from '../../assets/color/color'

const RentInfo = styled.div`
    border-radius: 5px;
    background-color: ${color.main};
    color: #fff;
    padding: 40px 30px;
    font-size: 18px;
    width: 904px;

    .payload{
        margin-top: 20px;
        display: grid;
        grid-template-areas: 1fr 1fr 1fr;
        align-items: center
    }

    .name{
        grid-column-start: 1;
        grid-row-start: 1;
        grid-row-end: 4;
    }

    .price{
        grid-column-start: 3;
        grid-row-start: 1;
        grid-row-end: 4;
    }

    h4{
        font-size: inherit;
        display: flex;
        align-items: center;
    }

    span{
        margin-right: 20px;
        margin-left: 10px;
    }

    img{
        height: 16px;
        width: 16px;
    }

    .grow{
        flex-grow: 1;
    }


`

export default RentInfo