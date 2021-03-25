import styled from 'styled-components';
import color from '../../assets/color/color';

const Header = styled.div`
    max-width: 1920px;
    height: 80px;
    padding: 0 277px;
    background: ${color.main};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__logo {
        width: 150px;
        height: 50px;
    }
    .header__logo img {
        height: 100%;
        width: 100%;
    }

    .header__menu{
        display: flex;
        flex-wrap: wrap;
    }

    .header__menu ul {
        display: flex;
        align-items: center;
    }

    .header__menu ul h3{
        margin-left: 10px;
    }

    .header__menu li {
        margin-left: 20px;
    }

    .header__menu .palki {
        top: -10px;
        margin-top: 2px;
        margin-right: -4px;
        height: 15px;
        width: 15px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    .header__menu .palki div {
        width: 19px;
        height: 5px;
        background-color: #fa7268;
    }
    .header__menu .palki div:first-child {
        transform: rotate(-45deg);
    }
    .header__menu .palki div:last-child {
        transform: rotate(45deg);
    }
`;

export default Header;
