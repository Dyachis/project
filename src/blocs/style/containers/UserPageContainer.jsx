import styled from 'styled-components'
import color from '../../../assets/color/color'

const UserPageContainer = styled.div`
    color: ${color.main};
    padding: 60px 277px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;

    h3{
        text-align: center;
        font-size: 24px;
        margin-bottom: 30px;
        font-weight: normal;
    }

    p{
        font-size: 18px;
    }

    .container{
        height: 400px;
        width: 400px;
        border: 1px solid ${color.main};
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container .img{
        height: 200px;
        width: 200px;
        overflow: hidden;
        border-radius: 50%;
        margin-bottom: 30px;
        text-align: center;
    }

    .container img{
        width: inherit;
    }

`
export default UserPageContainer