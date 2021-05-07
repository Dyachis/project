import FindFormContainer from '../style/containers/FindFormContainer';
import React from 'react';
import Select from 'react-select';
import options from '../../components/form/SelectOptions';
import FormType from '../../components/form/FormType';
import FormPrice from '../../components/form/FormPrice';
import FormRooms from '../../components/form/FormRooms';
import InputButton from '../../blocs/style/InputButton';

function FindForm({arr,addArr}) {
    console.log(arr);
    return <>
        <FindFormContainer>
            <form action="#" onSubmit={(e) => Finder(e, addArr)}>
                <ul>
                <li><Select options={options} placeholder={'Enter city...'} className={'cityfield'} name='city' styles={{input: styles => ({ ...styles, minHeight: '40px' })}}/></li>
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

function Finder(e, addPost) {
    e.preventDefault();
    addPost({
        arr:{
            city: e.target.city.value,
            price: e.target.range.value,

            apt:e.target.apt.checked,
            house:e.target.house.checked,
            sublet:e.target.sublet.checked,
            duplex:e.target.duplex.checked,
            loft:e.target.loft.checked,

            one:e.target.oneroom.checked,
            two:e.target.tworoom.checked,
            three:e.target.threeroom.checked,
            four:e.target.fourroom.checked,
            five:e.target.fiveroom.checked,
        }
    });
    
    // console.log(
    //     e.target.city.value,
    //     e.target.range.value,
    //     ' Types: ',
    //     e.target.apt.checked,
    //     e.target.house.checked,
    //     e.target.sublet.checked,
    //     e.target.duplex.checked,
    //     e.target.loft.checked,
    //     ' Rooms: ',
    //     e.target.oneroom.checked,
    //     e.target.tworoom.checked,
    //     e.target.threeroom.checked,
    //     e.target.fourroom.checked,
    //     e.target.fiveroom.checked,
    //     );
    }
    
export default FindForm;