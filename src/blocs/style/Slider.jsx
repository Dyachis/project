import styled from 'styled-components'

const Slider = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    .img{
        width: calc((100% - 40px) / 3);
        height: 300px;
    }

    img{
        width: 100%;
        height: 100%;
    }
`

export default Slider