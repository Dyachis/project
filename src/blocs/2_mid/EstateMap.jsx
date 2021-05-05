import EstateMapContainter from '../style/containers/EstateMapContainter'
import VerticalScroll from '../../components/VerticalScroll'
import PopularCities from './PopularCities'
import Map from '../../components/Map'

import FindForm from './FindForm'
import img from '../../assets/img/dom.png'
import { useState } from 'react'
import EstateHook from '../../firebase/hooks/estateFireHook'

function EstateMap() {
  const arr = [
    { img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 1000 },
    { img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 3000 },
    { img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 2000 },
    { img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 1500 },
    { img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 5000 },
  ]
  const [latLang, setLatLang] = useState({ lat: 59.95, lng: 30.33 })

  const { estates } = EstateHook(null)
  console.log(estates)
  const ar = []
  estates.forEach((e) => ar.push(e.latlng))
  console.log(ar)

  return (
    <EstateMapContainter>
      <PopularCities changeCenter={setLatLang} />
      <FindForm />
      <div className='section'>
        <VerticalScroll arr={arr} />
        <Map center={latLang} size={{ width: '830px', height: '940px' }} />
      </div>
    </EstateMapContainter>
  )
}

export default EstateMap
