import { Switch, Route, Redirect } from 'react-router-dom';
import { Transition } from 'react-spring/renderprops';
import { useState } from 'react';

import Contact from './emptyPages/Contact';
import Faq from './emptyPages/Faq';

import Mid from '../style/Mid';
import WelcomeSection from './welcomeSection/WelcomeSection';
import EstateMap from './EstateMap';
import UserPage from './UserPage'
import EstatePage from './estatePage/EstatePage';

export default function Md() {

    const [showWelcomeSection, setWelcomeSection] = useState(true);

    return (
        <Mid>
            <Switch>
                <Route path='/home'>
                    <Transition
                        items={showWelcomeSection}
                        enter={{
                            opacity: 1,
                            height: '540px',
                            transform: 'translateY(0)',
                        }}
                        leave={{
                            opacity: 0,
                            height: '0px',
                            transform: 'translateY(-500px)',
                        }}
                        from={{
                            opacity: 1,
                            height: '540px',
                            transform: 'translateY(0)',
                        }}
                    >
                        {(item) =>
                            item &&
                            ((props) => (
                                <div style={props}>
                                    <WelcomeSection
                                        showWelcomeSection={showWelcomeSection}
                                        setWelcomeSection={setWelcomeSection}
                                    />
                                </div>
                            ))
                        }
                    </Transition>
                    <EstateMap/>
                </Route>
                <Route path='/profile' component={UserPage} />
                <Route path='/estate' component={EstatePage} />
                <Route path='/contact' component={Contact} />
                <Route path='/faq' component={Faq} />
                <Redirect from='**' to='/home' />
            </Switch>
        </Mid>
    );
}
