import EditContainer from '../../style/containers/EditContainer'
import publishEstate from '../../../firebase/functions/publishEstate'
import { useAuth } from '../../../context/AuthContext'
import { useState } from 'react'
import { useHistory } from 'react-router'

import Map from '../../../components/PlacePickMap'
import Select from 'react-select';
import options from '../../../components/form/SelectOptions';

export default function PublishPage() {

  const {currentUser} = useAuth()
  const history = useHistory()

  const [name, setName] = useState(false)
  const [bads, setBads] = useState(false)
  const [baths, setBaths] = useState(false)
  const [area, setArea] = useState(false)
  const [price, setPrice] = useState(false)
  const [file, setFile] = useState(false)
  
  function handleSubmit(e){
    e.preventDefault()
    if (e.target.name.value === '') setName(true)
    else setName(false)
    if (e.target.bads.value === '') setBads(true)
    else setBads(false)
    if (e.target.baths.value === '') setBaths(true)
    else setBaths(false)
    if (e.target.area.value === '') setArea(true)
    else setArea(false)
    if (e.target.price.value === '') setPrice(true)
    else setPrice(false)
    if (e.target.file.value === '') setFile(true)
    else setFile(false)
    if (![name, bads, baths, area, price].includes(true)){
    } else {
      publishEstate(e, currentUser)
      setTimeout(() => {
        history.push('/profile')
      },2000)
    }
  }
  
  
  const [center, setCenter] = useState({lat:59.95, lng: 30.33})
  const [latlng, setLatLng] = useState({lat:59.95, lng: 30.33})
  
  return (
    <EditContainer>
      <h1>Publish your property</h1>
      <form onSubmit={handleSubmit}>
      
        <div htmlFor="form">
          <label htmlFor='name'>
            Name
          </label>
            <input name='name' id='name' type='text' style={{border: name && '1px solid red'}}/>
        </div>
        <div htmlFor="form">
          <label htmlFor='bads'>
            Bads
          </label>
            <input id='bads' name='bads' type='number' style={{border: bads && '1px solid red'}}/>
        </div>
        <div htmlFor="form">
          <label htmlFor='baths'>
            Baths
          </label>
            <input id='baths' name='baths' type='number' style={{border: baths && '1px solid red'}}/>
        </div>
        <div htmlFor="form">
          <label htmlFor='area'>
            Area
          </label>
            <input id='area' name='area' type='number' style={{border: area && '1px solid red'}}/>
        </div>
        <div htmlFor="form">
          <label htmlFor='price'>
            Price
          </label>
            <input id='price' name='price' type='number' style={{border: price && '1px solid red'}}/>
        </div>
        <div htmlFor="form">
          <label htmlFor='file'>
            Img
          </label>
            <input id='file' name='file' type='file' style={{border: file && '1px solid red'}}/>
        </div>
        <div htmlFor="form">
          <input type='submit' value='Submit'/>
        </div>
      <div className='city'>

      <Select
        options={options}
        placeholder={'Enter city...'} 
        onChange={(e) => {
          setCenter({lat: e.lat, lng: e.lng})
        }}
        className={'cityfield'}
        name='city'
        styles={{input: styles => ({ ...styles, minHeight: '40px' })}}/>
      </div>
      <Map center={center} size={{width: '500px', height: '500px'}} latlng={latlng} setLatLng={setLatLng}/>

        </form>
    </EditContainer>
  )
}
