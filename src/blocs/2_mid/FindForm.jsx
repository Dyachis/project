import FindFormContainer from '../style/containers/FindFormContainer';
import React from 'react';
import SelectList from '../../components/form/FormSelect';
import FormType from '../../components/form/FormType';
import FormPrice from '../../components/form/FormPrice';
import FormRooms from '../../components/form/FormRooms';
import InputButton from '../../blocs/style/InputButton';

export default function FindForm() {
    return <>
        <FindFormContainer>
            <form action="#" onSubmit={(e) => Finder(e)}>
                <ul>
                    <SelectList/>
                    <FormPrice />
                    <FormType />
                    <FormRooms/>
                    <li className="dropdown">
                        <div className="dropbtn">Dates</div>
                        <div className="dropdown-content-dates">
                            <div className='strelka-dates'>&#9650;</div>
                            <input type="date" name="date" />
                            {/* ----- Вставь сюда календарь ----- */}
                        </div>
                    </li>
                    <InputButton>
                    Search
                    <input className='search' type="submit" value="Search" />
                    </InputButton>
                </ul>
            </form>
        </FindFormContainer>


    </>
}

function Finder(e) {
    e.preventDefault();
    console.log(
        e.target.city.value,
        e.target.range.value,
        ' Types: ',
        e.target.apt.checked,
        e.target.house.checked,
        e.target.sublet.checked,
        e.target.duplex.checked,
        e.target.loft.checked,
        ' Rooms: ',
        e.target.oneroom.checked,
        e.target.tworoom.checked,
        e.target.threeroom.checked,
        e.target.fourroom.checked,
        e.target.fiveroom.checked,
    );
}
