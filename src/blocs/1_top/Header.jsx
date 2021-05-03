import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'
import TransitionMenu from './TransitionMenu'
import HeaderContainer from '../style/containers/HeaderContainer'
import RentMe from '../../assets/svg/Logo.svg'
import SinginPopup from '../../components/singinPopup/SinginPopup'
import MenuIfNoLogedIn from './MenuIfNoLogedIn'
import MenuIfLogedIn from './MenuIfLogedIn'

function Header() {
  const [showMenu, setMenu] = useState(false)
  const [shownPopup, setPopup] = useState(false)
  const { currentUser, logout } = useAuth()

  return (
    <HeaderContainer>
      <div className='header__logo'>
        <Link to='/home'>
          <img src={RentMe} alt='logo' />
        </Link>
      </div>
      <div className='header__menu'>
        <TransitionMenu setMenu={setMenu} showMenu={showMenu}/>
        {currentUser ? 
        <MenuIfLogedIn  showMenu={showMenu} logout={logout}/>
        :
        <MenuIfNoLogedIn showMenu={showMenu} shownPopup={shownPopup} setPopup={setPopup}/>
        }
        {shownPopup && (
          <SinginPopup setPopup={setPopup} />
        )}
      </div>
    </HeaderContainer>
  )
}

export default Header
