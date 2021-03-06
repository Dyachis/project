import EditContainer from '../../style/containers/EditContainer'
import InputButton from '../../style/InputButton'

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
    if ([name, rooms, baths, area, price, file].includes(true)) {
      console.log('Not submitted');
    } else {
      console.log('Submitted')
      publishEstate(e, profile, latlng)
      setTimeout(() => {
        history.push('/profile')
      }, 1000)
    }
  }

  function EmptyInputsChecker(e){
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
        <ul>
        <li htmlFor='form'>
          <label htmlFor='name' >Name</label>
          <input name='name' id='name' type='text' onChange={EmptyInputsChecker} placeholder="Type estate name here..."/>
        </li>
        <li htmlFor='form'>
          <label htmlFor='rooms' >Rooms</label>
          {/* <input id='rooms' name='rooms' type='number' className='roomsI' onChange={EmptyInputsChecker} placeholder="Type number of rooms here..."/> */}
          <input id='rooms' name='rooms' type='number' onChange={EmptyInputsChecker} placeholder="Type number of rooms here..."/>
        </li>
        <li htmlFor='form'>
          <label htmlFor='baths' >Baths</label>
          <input id='baths' name='baths' type='number' onChange={EmptyInputsChecker} placeholder="Type number of baths here..."/>
        </li>
        <li htmlFor='form'>
          <label htmlFor='area' >Area</label>
          <input id='area' name='area' type='number' onChange={EmptyInputsChecker} placeholder="Type apartment area here..."/>
        </li>
        <li htmlFor='form'>
          <label htmlFor='price' >Price</label>
          <input id='price' name='price' type='number' onChange={EmptyInputsChecker} placeholder="Type price here..."/>
        </li>
        <li htmlFor='form'>
          <label htmlFor='file' >Images</label>
          <div className='filecont' style={{
            background: 'white',
            height: '65px',
            borderRadius: '5px',

            }}>
            <label style={{
              position:'absolute',
              color: '#0F4C81',
              fontSize: '20px',
              right: '1128px',
              top: '692px'
              }}>
                Drag and Drop
              </label>
            <label style={{
              position:'absolute',
              color: '#0F4C81',
              fontSize: '20px',
              right: '1143px',
              top: '714px'
              }}>
                Or just Click
              </label>

            <input id='file' name='file' type='file' onChange={EmptyInputsChecker} multiple='on' className='fileinp'/>
          </div>
        </li>
        <li htmlFor='form'>
          <InputButton primary>
            Publish
            <button className='search' type="submit" value="Search" />
          </InputButton>
        </li>
        </ul>
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
        <Map
          draggableMarker={true}
          center={center}
          size={{ width: '900px', height: '500px' }}
          latlng={latlng}
          setLatLng={setLatLng}
        />
        </div>
      </form>
    </EditContainer>
  )
}
