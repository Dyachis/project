import FindFormContainer from '../style/containers/FindFormContainer';
import React from 'react';
import Select from 'react-select';
// import  { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css';

const options = [
    { value: 'haifa', label: 'Haifa, Israel' },
    { value: 'ashqelon', label: 'Ashqelon, Israel' },
    { value: 'batumi', label: 'Batumi, Georgia' },
    { value: 'tbilisi', label: 'Tbilisi, Georgia' },
    { value: 'khakiv', label: 'Khakiv, Ukraine' },
    { value: 'jerusalem', label: 'Jerusalem, Israel' },
    { value: 'lviv', label: 'Lviv, Ukraine' },
    { value: 'odessa', label: 'Odessa, Ukraine' },
    { value: 'netanya', label: 'Netanya, Israel' },
    { value: 'poti', label: 'Poti, Georgia' },
    { value: 'zugdidi', label: 'Zugdidi, Georgia' },
    { value: 'sukhumi', label: 'Sukhumi, Georgia' },
    { value: 'kutaici', label: 'Kutaici, Georgia' },

]

// let arr = [];

//   const MyComponent = () => (
//     <Select options={options} placeholder={'Enter city...'} className={'cityfield'}/>
//     )

export default function FindForm() {
    return <>
        <FindFormContainer>
            {/* <form action="#">
                <input class="box" list="Country" name="Countries" placeholder=" Country" />
                <datalist id="Country">
                    <option value="Afghanistan" />
                    <option value="Albania" />
                    <option value="Algeria" />
                    <option value="American Samoa" />
                </datalist>
            </form> */}
            <form action="#" onSubmit={(e) => Finder(e)}>
                <ul>
                    {/* <li>{MyComponent()}</li> */}
                    <li><Select options={options} placeholder={'Enter city...'} className={'cityfield'} name='city' /></li>
                    <li className="dropdown">
                        <div className="dropbtn">Price</div>
                        <div className="dropdown-content">
                            <div className='strelka'>&#9650;</div>
                            <input type="text" name={'minprice'} autoComplete="off" placeholder={'Min'} />
                            <input type="text" name={'maxprice'} autoComplete="off" placeholder={'Max'} />
                            {/* <Range class="price-range" min={0} max={100} step={10} defaultValue={[20,80]} /> */}
                        </div>
                    </li>
                    <li className="dropdown">
                        <div className="dropbtn">Type</div>
                        <div className="dropdown-content-type">
                            <div className='strelka-type'>&#9650;</div>
                            <div className='boxes'>
                                <ul>
                                    <li><input type="checkbox" name="apt" /><span>Apartment</span></li>
                                    <li><input type="checkbox" name="house" /><span>House</span></li>
                                    <li><input type="checkbox" name="sublet" /><span>Sublet</span></li>
                                    <li><input type="checkbox" name="duplex" /><span>Duplex</span></li>
                                    <li><input type="checkbox" name="loft" /><span>Loft</span></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown">
                        <div className="dropbtn">Rooms</div>
                        <div className="dropdown-content-room">
                            <div className='strelka-room'>&#9650;</div>
                            <div className='boxes'>
                                {/* <ul>
                                    <li><input type="button" name="onebtn" value="1" onClick={() => {}}/></li>
                                    <li><input type="button" name="onebtn" value="2" onClick={() => {}}/></li>
                                    <li><input type="button" name="onebtn" value="3" onClick={() => {}}/></li>
                                    <li><input type="button" name="onebtn" value="4" onClick={() => {}}/></li>
                                    <li><input type="button" name="onebtn" value="5" onClick={() => {}}/></li>
                                    <li><input type="button" name="onebtn" value="6+" onClick={() => {}}/></li>
                                </ul> */}
                            </div>
                        </div>
                    </li>
                    <li className="dropdown">
                        <div className="dropbtn">Dates</div>
                        <div className="dropdown-content-dates">
                            <div className='strelka-dates'>&#9650;</div>
                            <input type="date" name="date"/>
                            {/* ----- Вставь сюда календарь ----- */}
                        </div>
                    </li>
                    <input className='search' type="submit" value="Search" />
                </ul>
            </form>


        </FindFormContainer>
    </>
}

function Finder(e) {
    e.preventDefault();
    console.log(
        e.target.city.value,
        e.target.minprice.value,
        e.target.maxprice.value,

        e.target.apt.checked,
        e.target.house.checked,
        e.target.sublet.checked,
        e.target.duplex.checked,
        e.target.loft.checked,
    );
}
