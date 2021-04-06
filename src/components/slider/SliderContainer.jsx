import styled from 'styled-components'

const SliderContainer = styled.div`

    display: flex;
    overflow: hidden;
    position: relative;

    .slider{
        display: flex;
        justify-content: space-between;
        transform: ${props => 'translateX(-' + props.translateX + 'px)'};
        transition: transform ease-out 0.45s;
    }

    .img{
        width: calc((100% - 40px) / 3);
        height: 300px;
        flex-shrink: 0;
        margin-right: 20px;
    }

    img{
        width: 100%;
        height: 100%;
    }

`

export default SliderContainer