import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { useState } from 'react'

import Contact from './emptyPages/Contact'
import Faq from './emptyPages/Faq'

import Mid from '../style/Mid'
import WelcomeSection from './welcomeSection/WelcomeSection'
import EstateMap from './EstateMap'
import ProfilePage from './profilePage/ProfilePage'
import EstatePage from './estatePage/EstatePage'
import PublishPage from './publishPage/PublishPage'

export default function Md() {
  const [showWelcomeSection, setWelcomeSection] = useState(true)
  let history = useHistory()

  return (
    <Mid>
      <Switch>
        <Route path='/home'>
          <WelcomeSection showWelcomeSection={showWelcomeSection} setWelcomeSection={setWelcomeSection} />
          <EstateMap />
        </Route>
        <Route path='/profile/publish' exact component={PublishPage} />
        <Route path='/profile' component={() => <ProfilePage history={history} />} />
        <Route path='/estate' component={EstatePage} />
        <Route path='/contact' component={Contact} />
        <Route path='/faq' component={Faq} />
        <Redirect from='**' to='/home' />
      </Switch>
    </Mid>
  )
}
