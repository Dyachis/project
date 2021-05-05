import styled from 'styled-components'

const SliderContainer = styled.div`

    display: flex;
    overflow: hidden;
    position: relative;
    margin-bottom: 60px;

    .slider{
        min-width: 100%;
        display: flex;
        justify-content: ${props => props.pics > 2 ? 'space-between' : 'center'};
        transform: ${props => 'translateX(-' + props.translateX + 'px)'};
        transition: transform ease-out 0.45s;
    }

    .img{
        width: 442px;
        height: 300px;
        flex-shrink: 0;
        margin-right: ${props => props.pics > 1 && '20px'};
        overflow: hidden;
        border-radius: 10px;
    }

    img{
        width: 100%;
        height: 100%;
    }

`

export default SliderContainer