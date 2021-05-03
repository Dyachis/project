import { Switch, Route, useHistory } from 'react-router'
import SinginPopupContainer from '../../blocs/style/containers/SinginPopupContainer'

import X from './X'
import Login from './Login'
import Register from './Register'

export default function SinginPopup({ setPopup }) {
  let history = useHistory()

  function clickHandler(e){
    if (e.target.classList.value.includes('waffer')) {
      setPopup()
    }
  }

  return (
    <SinginPopupContainer className='waffer' onClick={(e) => clickHandler(e)}>
      <div className='popup'>
        <X history={history} setPopup={setPopup} />
        <h1>What about you?</h1>
        <div className='loginForm'>
          <Switch>
            <Route
              path='/home/login'
              component={() => (
                <Login
                  history={history}
                  setPopup={setPopup}
                />
              )}
            />
            <Route
              path='/home/register'
              component={() => (
                <Register
                  history={history}
                  setPopup={setPopup}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </SinginPopupContainer>
  )
}
