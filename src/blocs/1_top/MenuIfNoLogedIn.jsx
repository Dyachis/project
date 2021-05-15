import { Transition } from 'react-spring/renderprops'
import { Link } from 'react-router-dom'

import Button from '../style/Button'

export default function MenuIfNoLogedIn({
  showMenu,
  setPopup,
  shownPopup,
}) {
  return (
    <Transition
      items={showMenu}
      enter={{
        opacity: 1,
        transform: 'translateX(0)',
      }}
      leave={{
        opacity: 1,
        transform: 'translateX(0)',
      }}
      from={{
        opacity: 0,
        transform: 'translateX(200px)',
      }}
    >
      {(item) =>
        item &&
        ((props) => (
          <ul style={props}>
            <li>
              <Link to='/home/login'>
                <Button
                  onClick={() => {
                    setPopup(!shownPopup)
                  }}
                >
                  Sign in
                </Button>
              </Link>
            </li>
            <li>
              <Link to='/home/register'>
                <Button
                  primary
                  onClick={() => {
                    setPopup(!shownPopup)
                  }}
                >
                  Register
                </Button>
              </Link>
            </li>
          </ul>
        ))
      }
    </Transition>
  )
}
