import React, { useState } from 'react';
import idleCounter from './idleCounter';
import color from '../../assets/color/color'

export default function FormType() {
    const [count, setCount] = useState(0);

    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);

    return <li className="dropdown">
        <div className="dropbtn">{count > 0 ? count + ' of 5' : "Types"}</div>
        <div className="dropdown-content-type">
            <div className='strelka-type'>&#9650;</div>
            <div className='boxes'>
                <label className="container" style={{backgroundColor: one ? color.secondary : 'white', color: one ?  'white' : color.main }}>Apartment
                    <input type="checkbox" name='apt' min={'2'} onClick={((e) => {setOne(!one); setCount(idleCounter(e, count)); })}/>
                    <span className="checkmark"></span>
                </label>

                <label className="container" style={{backgroundColor: two ? color.secondary : 'white', color: two ? 'white' : color.main}}>House
                    <input type="checkbox" name='house' min={'4'} onClick={((e) => { setTwo(!two); setCount(idleCounter(e, count)); })}/>
                    <span className="checkmark"></span>
                </label>

                <label className="container" style={{backgroundColor: three ? color.secondary : 'white', color: three ? 'white' : color.main}}>Sublet
                    <input type="checkbox" name='sublet' min={'6'} onClick={((e) => { setThree(!three); setCount(idleCounter(e, count)); })}/>
                    <span className="checkmark"></span>
                </label>

                <label className="container" style={{backgroundColor: four ? color.secondary : 'white', color: four ? 'white' : color.main}}>Duplex
                    <input type="checkbox" name='duplex' min={'8'} onClick={((e) => { setFour(!four); setCount(idleCounter(e, count)); })}/>
                    <span className="checkmark"></span>
                </label>

                <label className="container" style={{backgroundColor: five ? color.secondary : 'white', color: five ? 'white' : color.main}}>Loft
                    <input type="checkbox" name='loft' min={'10'} onClick={((e) => { setFive(!five); setCount(idleCounter(e, count)); })}/>
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>
    </li>
}