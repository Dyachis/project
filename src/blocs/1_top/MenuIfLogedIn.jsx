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
            <li><Link to='/profile/publish'><Button style={{width: '250px'}}>Publish a new property</Button></Link></li>
            <li><Link to='/profile'><Button>Profile</Button></Link></li>
            <li>
              <Link to='/home/register'>
                <Button primary onClick={logout}>
                  Sign out
                </Button>
              </Link>
            </li>
          </ul>
        ))
      }
    </Transition>
  )
}
