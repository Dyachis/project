import React, { useState } from 'react';
import Select from 'react-select';
import options from '../../components/form/SelectOptions';

import FormType from '../../components/form/FormType';
import FormPrice from '../../components/form/FormPrice';
import FormRooms from '../../components/form/FormRooms';
import FormData from '../../components/form/FormData';

import FindFormContainer from '../style/containers/FindFormContainer';
import InputButton from '../../blocs/style/InputButton';

function FindForm({arrSearch,addArr}) {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return <>
        <FindFormContainer>
            <form action="#" onSubmit={(e) => Finder(e, addArr, state)}>
                <ul className='formul'>
                <li><Select options={options} placeholder={'Enter city...'} className={'cityfield'} name='city' styles={{input: styles => ({ ...styles, minHeight: '40px' })}}/></li>
                    <FormPrice />
                    <FormType />
                    <FormRooms/>
                    <FormData state={state} setState={setState}/>
                    <InputButton>
                    Search
                    <input className='search' type="submit" value="Search" />
                    </InputButton>
                </ul>
            </form>
        </FindFormContainer>


    </>
}

function Finder(e, addArr, state) {
    e.preventDefault();
    addArr({
        arr:{
            city: e.target.city.value,
            price: e.target.range.value,
            
            type: 
            (e.target.apt.checked ? 'apt' : "") + 
            (e.target.house.checked ? ',house' : "") + 
            (e.target.sublet.checked ? ',sublet' : "") + 
            (e.target.duplex.checked ? ',duplex' : "") + 
            (e.target.loft.checked ? ',loft' : ""), 

            rooms:
            (e.target.oneroom.checked ? '1' : '') +
            (e.target.tworoom.checked ? ',2' : '') +
            (e.target.threeroom.checked ? ',3' : '') +
            (e.target.fourroom.checked ? ',4' : '') +
            (e.target.fiveroom.checked ? ',5' : ''),

            date: state,
        }
    });
}
    
export default FindForm;