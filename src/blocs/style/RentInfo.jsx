import styled from 'styled-components'
import color from '../../assets/color/color'

const RentInfo = styled.div`
    border-radius: 5px;
    background-color: ${color.main};
    padding: 40px 30px;
    font-size: 18px;
    width: 904px;

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