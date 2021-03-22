import styled from 'styled-components'
import background from '../../assets/img/background.png'

const PlaceFinderContainer = styled.div`
    height: 540px;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    text-align:center;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;

    h1{
        color: #fff;
        font-weight: normal;
        font-size: 60px;
        z-index: 10;
    }

    h2{
        z-index: 10;
    }

    form{
        display: flex;
        flex-direction: row;
       justify-content: center;
       z-index: 10;
    }
    form div{
        margin-right: 20px;
        z-index: 10;
    }    

    .cover{
        background-color: rgba(0,0,0,0.3);
        z-index: 1;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
    }
`

export default PlaceFinderContainer