import styled from 'styled-components'
import color from '../../assets/color/color'

const Popup = styled.div`

    .blur{
        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: 99;
        left: 0;
        top: 0;
        background-color: #000000;
        opacity: 0.4;
    }

    .popup{
        position: fixed;
        left: 0; 
        right: 0; 
        margin: 100px auto;
        width: 900px;
        height: 500px;
        text-align: center;
        z-index: 110;
        background-color: ${color.main};
        border-radius: 5px;
        padding: 60px;
    }

    .loginForm{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }

    .loginForm form{
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 270px;
        justify-content: space-between;
    }

    .loginForm form input{
        background-color: ${color.main};
        border: none;
        border-bottom: 3px solid #fff;
        outline-style: none;
        font-size: 18px;
        color: #fff;
        padding-bottom:3px;
    }

    .loginForm form input::placeholder{
        color: #fff;
        opacity: 0.5;
    }

    h1{
        color: #fff;
        font-weight: normal;
    }

    .x{
        position: absolute;
        top: 20px;
        right:60px;
        z-index:111;
        cursor: pointer;
    }
    .x div{
        height: 20px;
        width: 5px;
        background-color: #fff;
    }
    .x div:first-child{
        transform: translateY(20px) rotate(45deg);
    }
    .x div:last-child{
        transform: rotate(-45deg);
    }

    .btns{
        display: flex;
        justify-content: space-between;
    }
`

export default Popup