import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-spring/renderprops';
import withContext from '../../context/withContext';

import HeaderContainer from '../style/containers/HeaderContainer';
import Button from '../style/Button';
import RentMe from '../../assets/svg/Logo.svg';
import SinginPopup from '../../components/SinginPopup';

function Header({context}) {
    const [showMenu, setMenu] = useState(false);
    const [showPopup, setPopup] = useState(false);

    return (
        <HeaderContainer>
            <div className='header__logo'>
                <Link to='/home'>
                    <img src={RentMe} alt='logo' />
                </Link>
            </div>
            <div className='header__menu'>
                <Transition
                    items={!showMenu}
                    enter={{ opacity: 1, transform: 'translateX(0)' }}
                    leave={{ display: 'flex' }}
                    from={{ opacity: 0, transform: 'translateX(-300px)' }}
                >
                    {(item) =>
                        item &&
                        ((props) => (
                            <ul style={props} onMouseEnter={setMenu}>
                                <div className='palki'>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className='palki'>
                                    <div></div>
                                    <div></div>
                                </div>
                                <h3>Menu</h3>
                            </ul>
                        ))
                    }
                </Transition>
                <Transition
                    items={showMenu}
                    enter={{ opacity: 1, transform: 'translateX(0)' }}
                    leave={{ opacity: 1, transform: 'translateX(0)' }}
                    from={{ opacity: 0, transform: 'translateX(200px)' }}
                >
                    {(item) =>
                        item &&
                        ((props) => (
                            <ul style={props}>
                                <li>My favorites</li>
                                <li>
                                    <p>Profile</p>
                                </li>
                                <li>
                                    <Button
                                        primary
                                        onClick={() => {
                                            setPopup(!showPopup)
                                            context.toggleBlur()
                                        }}
                                    >
                                        Sing up
                                    </Button>
                                </li>
                            </ul>
                        ))
                    }
                </Transition>
                {showPopup && <SinginPopup changePopup={setPopup}/>}
            </div>
        </HeaderContainer>
    );
}

export default withContext(Header);
