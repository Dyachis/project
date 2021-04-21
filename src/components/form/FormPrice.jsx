// import { useState } from 'react';
import RangeSlider from '../rangeSlider/RangeSlider'

export default function FormPrice() {
    // const [min, setMin] = useState(0);
    // const [max, setMax] = useState(1000);
    // function idlePrice(e) {
    //     if (e.target.name === 'minprice') {
    //         if (parseInt(e.target.value) >= max && max !== "") {
    //             e.target.value = parseInt(max) - 1;
    //         }
    //         setMin(e.target.value);
    //     } else if (e.target.name === 'maxprice') {
    //         if (parseInt(e.target.value) <= min && min !== "") {
    //             e.target.value = parseInt(min) + 1
    //         }
    //         setMax(e.target.value);
    //     }
    // }

    return <li className="dropdown">
        <div className="dropbtn">Price</div>
        {/* <div className="dropbtn">{min > -0.00 ? 'From ' + min : 'Price'}{max > 1000 ? " to " + max : ""}</div> */}
        <div className="dropdown-content">
            <div className='strelka'>&#9650;</div>
            <div className="boxes">
                <RangeSlider/>
            </div>
        </div>
    </li>
}