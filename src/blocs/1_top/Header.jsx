import HeaderContainer from '../style/HeaderContainer'
import Button from '../style/Button'
import RentMe from '../../assets/svg/Logo.svg'
import Popup from '../../components/SinginPopup'
import {useState} from 'react'


export default function Header(){

    const [showMenu, setMenu] = useState(false)
    const [showPopup, setPopup] = useState(false)

    return <HeaderContainer>
        <div className='header__logo'>
            <img src={RentMe} alt="logo"/>
        </div>
        <div className='header__menu'>
            {showMenu ?
            <ul>
            <li>My favorites</li>
            <li><p>Profile</p></li>
            <li><Button primary onClick={() => setPopup(!showPopup)}>Sing up</Button></li>
            </ul>
            :
            <ul onMouseEnter={setMenu}>
            <div className="palki">
                <div></div>
                <div></div>
            </div>
            <div className="palki">
                <div></div>
                <div></div>
            </div>
            </ul>
            }
            {showPopup && <Popup/>}
        </div>
    </HeaderContainer>
}