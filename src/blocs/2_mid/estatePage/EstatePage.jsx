import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import { firestore } from '../../../firebase/firebase'
import EstMap from './EstatePageMap'

import EstatePageContainer from '../../style/containers/EstatePageContainer'
import Slider from '../../../components/slider/Slider'
import RentInfo from './RentInfo'

export default function EstatePage() {
  const [estate, setEstate] = useState({ img: [] })

  const { pathname } = useLocation()
  const estateId = pathname.replace(/estate/g, '').slice(2)

  useEffect(() => {
    const userRef = firestore.collection('rent-estates').doc(estateId)
    userRef.get().then((doc) => setEstate(doc.data()))
  }, [estateId])

  return (
    <EstatePageContainer>
      <h1>Clean and cozy place in Tel Aviv</h1>
      <Slider imgsArr={estate.img} />
      <RentInfo estate={estate} estateId={estateId} />
      <div className='mapcont'>
      <EstMap center={estate.latlng} size={{ width: '1366px', height: '400px' }}/>
      </div>
    </EstatePageContainer>
  )
}
