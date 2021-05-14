import styled from 'styled-components'
import color from '../../../assets/color/color'

const Popup = styled.div`

        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: 99;
        left: 0;
        top: 0;
        background: rgba(147, 147, 147, 0.2);;
        backdrop-filter: blur(6px);

    .popup{
        position: fixed;
        opacity: 1;
        left: 0; 
        right: 0; 
        margin: 100px auto;
        width: 900px;
        min-height: 500px;
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
        min-height: 270px;
        justify-content: space-between;
    }

    .loginForm form input{
        margin: 10px 0 15px;
        
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

    h4{
        text-decoration: underline;
        text-decoration-color: #ff0000;
    }

    label {
        color: #fff;
        text-align: start;
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

    p{
        color: #fff;
        margin: 15px 0;
    }

    a:visited{
        color: ${color.secondary};
        text-decoration-color: #fff;
    }

    .btns{
        display: flex;
        justify-content: space-between;
    }
`

export default Popup