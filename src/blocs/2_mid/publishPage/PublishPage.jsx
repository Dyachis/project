import EditContainer from '../../style/containers/EditContainer'
import publishEstate from '../../../firebase/functions/publishEstate'
import { useAuth } from '../../../context/AuthContext'
import { useState } from 'react'
import { useHistory } from 'react-router'

import Map from '../../../components/Map'
import Select from 'react-select'
import options from '../../../components/form/SelectOptions'
import UserFireHook from '../../../firebase/hooks/userFireHook'

export default function PublishPage() {
  const { currentUser } = useAuth()
  const { profile } = UserFireHook(currentUser.email)
  const history = useHistory()

  const [name, setName] = useState(true)
  const [rooms, setRooms] = useState(true)
  const [baths, setBaths] = useState(true)
  const [area, setArea] = useState(true)
  const [price, setPrice] = useState(true)
  const [file, setFile] = useState(true)
  
  console.log(
    name,rooms,baths,area,price,file
  );

  function handleSubmit(e) {
    EmptyInputsChecker(e)
    e.preventDefault()
    if ([name, rooms, baths, area, price].includes(true)) {
      console.log('Not submitted');
    } else {
      console.log('Submitted')
      // publishEstate(e, profile, latlng)
      // setTimeout(() => {
      //   history.push('/profile')
      // }, 3000)
    }
  }

  function EmptyInputsChecker(e){
    console.log(e.target.name);
    if (e.target.name === 'name' && e.target.value !== '') setName(false)
    else if(e.target.name === 'name' && e.target.name.value === '') setName(true)
    if (e.target.name === 'rooms' && e.target.value !== '') setRooms(false)
    else if(e.target.name === 'rooms' && e.target.value === '') setRooms(true)
    if (e.target.name === 'baths' && e.target.value !== '') setBaths(false)
    else if (e.target.name === 'baths' && e.target.value === '') setBaths(true)
    if (e.target.name === 'area' && e.target.value !== '') setArea(false)
    else if (e.target.name === 'area' && e.target.value === '') setArea(true)
    if (e.target.name === 'price' && e.target.value !== '') setPrice(false)
    else if(e.target.name === 'price' && e.target.value === '') setPrice(true)
    if (e.target.name === 'file' && e.target.value !== '') setFile(false)
    else if(e.target.name === 'file' && e.target.value === '') setFile(true)
  }

  const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 })
  const [latlng, setLatLng] = useState({ lat: 59.95, lng: 30.33 })


  return (
    <EditContainer>
      <h1>Publish your property</h1>
      <form onSubmit={handleSubmit}>
        <div htmlFor='form'>
          <label htmlFor='name'>Name</label>
          <input name='name' id='name' type='text' onChange={EmptyInputsChecker}/>
        </div>
        <div htmlFor='form'>
          <label htmlFor='rooms'>Rooms</label>
          <input id='rooms' name='rooms' type='number' onChange={EmptyInputsChecker}/>
        </div>
        <div htmlFor='form'>
          <label htmlFor='baths'>Baths</label>
          <input id='baths' name='baths' type='number' onChange={EmptyInputsChecker}/>
        </div>
        <div htmlFor='form'>
          <label htmlFor='area'>Area</label>
          <input id='area' name='area' type='number' onChange={EmptyInputsChecker}/>
        </div>
        <div htmlFor='form'>
          <label htmlFor='price'>Price</label>
          <input id='price' name='price' type='number' onChange={EmptyInputsChecker}/>
        </div>
        <div htmlFor='form'>
          <label htmlFor='file'>Img</label>
          <input id='file' name='file' type='file' onChange={EmptyInputsChecker}/>
        </div>
        <div htmlFor='form'>
          <input type='submit' value='Submit' onChange={EmptyInputsChecker}/>
        </div>
        <div className='city'>
          <Select
            options={options}
            placeholder={'Enter city...'}
            onChange={(e) => {
              setCenter({ lat: e.lat, lng: e.lng })
              setLatLng({ lat: e.lat, lng: e.lng })
            }}
            className={'cityfield'}
            name='city'
            styles={{ input: (styles) => ({ ...styles, minHeight: '40px' }) }}
          />
        </div>
        <Map
          draggableMarker={true}
          center={center}
          size={{ width: '500px', height: '500px' }}
          latlng={latlng}
          setLatLng={setLatLng}
        />
      </form>
    </EditContainer>
  )
}
