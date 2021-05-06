import EditContainer from '../../style/containers/EditContainer'
import publishEstate from '../../../firebase/functions/publishEstate'
import { useAuth } from '../../../context/AuthContext'
import { useState } from 'react'
import { useHistory } from 'react-router'

// import Map from '../../../components/PlacePickMap'
import Map from '../../../components/Map'
import Select from 'react-select'
import options from '../../../components/form/SelectOptions'
import UserFireHook from '../../../firebase/hooks/userFireHook'

export default function PublishPage() {
  const { currentUser } = useAuth()
  const { profile } = UserFireHook(currentUser.email)
  const history = useHistory()

  const [name, setName] = useState(false)
  const [bads, setBads] = useState(false)
  const [baths, setBaths] = useState(false)
  const [area, setArea] = useState(false)
  const [price, setPrice] = useState(false)
  const [file, setFile] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (e.target.name.value === '') return setName(true)
    else setName(false)
    if (e.target.bads.value === '') return setBads(true)
    else setBads(false)
    if (e.target.baths.value === '') return setBaths(true)
    else setBaths(false)
    if (e.target.area.value === '') return setArea(true)
    else setArea(false)
    if (e.target.price.value === '') return setPrice(true)
    else setPrice(false)
    if (e.target.file.value === '') return setFile(true)
    else setFile(false)
    if (![name, bads, baths, area, price].includes(true)) {
    } else {
      console.log('Submitted')
      publishEstate(e, profile, latlng)
      setTimeout(() => {
        history.push('/profile')
      }, 3000)
    }
  }

  const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 })
  const [latlng, setLatLng] = useState({ lat: 59.95, lng: 30.33 })

  function log(e){
    e.preventDefault()
    console.log(e.target.file.files[1]);
  }

  return (
    <EditContainer>
      <form onSubmit={log} >
        <input name='file' type="file" multiple='multiple' />
        <button type='submit'>LOG</button>
      </form>
      <h1>Publish your property</h1>
      <form onSubmit={handleSubmit}>
        <div htmlFor='form'>
          <label htmlFor='name'>Name</label>
          <input name='name' id='name' type='text' style={{ border: name && '1px solid red' }} />
        </div>
        <div htmlFor='form'>
          <label htmlFor='bads'>Bads</label>
          <input id='bads' name='bads' type='number' style={{ border: bads && '1px solid red' }} />
        </div>
        <div htmlFor='form'>
          <label htmlFor='baths'>Baths</label>
          <input id='baths' name='baths' type='number' style={{ border: baths && '1px solid red' }} />
        </div>
        <div htmlFor='form'>
          <label htmlFor='area'>Area</label>
          <input id='area' name='area' type='number' style={{ border: area && '1px solid red' }} />
        </div>
        <div htmlFor='form'>
          <label htmlFor='price'>Price</label>
          <input id='price' name='price' type='number' style={{ border: price && '1px solid red' }} />
        </div>
        <div htmlFor='form'>
          <label htmlFor='file'>Img</label>
          <input id='file' name='file' type='file' multiple style={{ border: file && '1px solid red' }} />
        </div>
        <div htmlFor='form'>
          <input type='submit' value='Submit' />
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
