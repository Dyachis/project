import EstateMapContainter from '../style/containers/EstateMapContainter'
import VerticalScroll from '../../components/VerticalScroll'
import PopularCities from './PopularCities'
import Map from '../../components/Map'

import FindForm from './FindForm'
import { useState } from 'react'
import EstateHook from '../../firebase/hooks/estateFireHook'

function EstateMap() {

    const { estates } = EstateHook(null)
    const [estatesOnBounds, setEstatesOnBounds] = useState(estates)
    
    const [latLng, setLatLang] = useState({ lat: 32.79, lng: 35.03 })
    
    
  return (
    <EstateMapContainter>
      <PopularCities changeCenter={setLatLang} />
      <FindForm />
      <div className='section'>
        <VerticalScroll arr={estatesOnBounds} />
        <Map center={latLng} size={{ width: '830px', height: '940px' }} estates={estates} setEstatesOnBounds={setEstatesOnBounds} />
      </div>
    </EstateMapContainter>
  )
}

export default EstateMap
