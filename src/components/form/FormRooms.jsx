import {useState} from 'react';
import color from '../../assets/color/color'
import idleCounter from './idleCounter';
    
export default function FormRooms() {

    const [count, setCount] = useState(0);

    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    
    return <li className="dropdown" style={{backgroundColor: 'white'}}>
        <div className="dropbtn" >{count > 0 ? count + ' of 5' : "Rooms"}</div>
        <div className="dropdown-content-room">
            <div className='strelka-room'>&#9650;</div>
            <div className='boxes'>
                <label className="container" style={{backgroundColor: one ? color.secondary : 'white', color: one ?  'white' : color.main }}>1
                    <input type="checkbox" name='oneroom' id={'12'} onClick={((e) => {setOne(!one); setCount(idleCounter(e, count));})}/>
                    <span className="checkmark" ></span>
                </label>
                <label className="container" style={{backgroundColor: two ? color.secondary : 'white', color: two ? 'white' : color.main}}>2
                    <input type="checkbox" name='tworoom' id={'14'} onClick={((e) => {setTwo(!two); setCount(idleCounter(e, count));})}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container" style={{backgroundColor: three ? color.secondary : 'white', color: three ? 'white' : color.main}}>3
                    <input type="checkbox" name='threeroom' id={'16'} onClick={((e) => {setThree(!three); setCount(idleCounter(e, count));})}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container" style={{backgroundColor: four ? color.secondary : 'white', color: four ? 'white' : color.main}}>4
                    <input type="checkbox" name='fourroom' id={'18'} onClick={((e) => {setFour(!four); setCount(idleCounter(e, count));})}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container" style={{backgroundColor: five ? color.secondary : 'white', color: five ? 'white' : color.main}}>5
                    <input type="checkbox" name='fiveroom' id={'20'} onClick={((e) => {setFive(!five); setCount(idleCounter(e, count));})}/>
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>
    </li>
}
