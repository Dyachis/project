import { Transition } from 'react-spring/renderprops'
import { Link } from 'react-router-dom'

import Button from '../style/Button'

export default function MenuIfLogedIn({ showMenu, logout }) {
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
            <li>My favorites</li>
            <li>Profile</li>
            <li></li>
            <li>
              <Link to='/home/register'>
                <Button primary onClick={logout}>
                  Sing out
                </Button>
              </Link>
            </li>
          </ul>
        ))
      }
    </Transition>
  )
}
