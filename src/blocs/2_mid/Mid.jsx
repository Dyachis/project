import { Switch, Route, Redirect} from 'react-router-dom'

import Contact from './emptyPages/Contact'
import Faq from './emptyPages/Faq'

import Mid from '../style/Mid'
import Spring from './Spring'
import PlaceFinder from './PlaceFinder'
import Calendar from '../../components/Calendar'

export default function Md(){

    return <Mid>
        <Switch>
            <Route path='/home'>
                <PlaceFinder/>
                <Spring/>
                <Calendar/>
            </Route>
            <Route path='/contact' component={Contact}/>
            <Route path='/faq' component={Faq}/>
            <Redirect from='**' to='/home'/>
        </Switch>
    </Mid>
    
}