import styled from 'styled-components'
import color from '../../assets/color/color'
import nyc from '../../assets/img/nyc.png'
import rome from '../../assets/img/rome.png'
import san_francisco from '../../assets/img/san_francisco.png'
import tel_aviv from '../../assets/img/tel_aviv.png'

const PopularCitiesContainer = styled.div`
    padding: 60px 277px ;

    h1{
        color: ${color.main};
    }

    .popularCities{
        display: flex;
        justify-content: space-between;
    }

    .PopularCities__city{
        width: 320px;
        height: 250px;
        border-radius: 5px;
        margin-top: 60px;
        padding: 20px;
        display: flex;
        flex-direction: column-reverse;
    }

    .PopularCities__city:nth-child(1){
        background-image: url(${nyc});
    }
    
    .PopularCities__city:nth-child(2){
        background-image: url(${rome});
    }
    .PopularCities__city:nth-child(3){
        background-image: url(${san_francisco});
    }
    .PopularCities__city:nth-child(4){
        background-image: url(${tel_aviv});
    }

`

export default PopularCitiesContainer