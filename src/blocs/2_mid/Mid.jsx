import { Switch, Route, Redirect } from 'react-router-dom';
import { Transition } from 'react-spring/renderprops';
import { useState } from 'react';

import Contact from './emptyPages/Contact';
import Faq from './emptyPages/Faq';

import Mid from '../style/Mid';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import EstateMap from './EstateMap';

export default function Md() {
    const [showWelcomeSection, setWelcomeSection] = useState(true);
    // const [arr, setArr] = useState([
    //     { num: 1, active: false, date: 0, style: '' },
    //     { num: 2, active: false, date: 0, style: '' },
    //     { num: 3, active: false, date: 0, style: 'qwert' },
    //     { num: 4, active: false, date: 0, style: '' },
    //     { num: 5, active: false, date: 0, style: '' },
    // ]);
    // const [first, setFirst] = useState(0)
    // const [second, setSecond] = useState(0)

    // function wwww() {
    //     setArr([...arr], arr.map(e => e.style = ''))
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i].date > first){
    //             setSecond(first)
    //             setFirst(arr[i].date)
    //         }
    //     }
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i].date === first || arr[i].date === second){
    //             setArr([...arr], arr[i].style = 'qwert')
    //         }
    //     }
    // }

    // function callback(func, e, i){
    //     setArr([...arr], arr[i].date = Date.parse(new Date()))
    //     return func()
    // }

    return (
        <Mid>
            {/* <div style={{ display: 'flex' }}>
                {arr.map((e, i) => (
                    <div
                        key={i}
                        onClick={(e) => {
                            callback(wwww, e, i)
                        }}
                        className={e.style}
                        style={{
                            fontSize: '50px',
                            border: '1px solid red',
                            margin: '10px',
                            padding: '0 20px',
                        }}
                    >
                        {e.num}
                    </div>
                ))}
                <button onClick={() => {
                    console.log(arr)
                    console.log(first);
                    console.log(second);
                    }}>LOG</button>
            </div> */}
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
                </Route>
                <Route path='/contact' component={Contact} />
                <Route path='/faq' component={Faq} />
                <Redirect from='**' to='/home' />
            </Switch>
            <EstateMap/>
        </Mid>
    );
}
