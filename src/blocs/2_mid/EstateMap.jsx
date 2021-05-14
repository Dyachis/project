import EstateMapContainter from '../style/containers/EstateMapContainter'
import VerticalScroll from '../../components/VerticalScroll'
import PopularCities from './PopularCities'
import Map from '../../components/Map'

import FindForm from './FindForm'
import { useState } from 'react'
import EstateHook from '../../firebase/hooks/estateFireHook'

import {connect} from 'react-redux';
import * as Actions from '../../redux/findStorage/actionCreator'

function EstateMap({arr,addArr}) {
    const { estates } = EstateHook(null)
    const [estatesOnBounds, setEstatesOnBounds] = useState(estates)
    const [latLng, setLatLang] = useState({ lat: 32.81, lng: 34.98 })
        
  return (
    <EstateMapContainter>
      <PopularCities changeCenter={setLatLang} />
      <FindForm arrSearch={arr} addArr={addArr}/>
      <div className='section'>
        <VerticalScroll arr={estatesOnBounds} />
        <Map center={latLng} size={{ width: '830px', height: '940px' }} estates={estates} setEstatesOnBounds={setEstatesOnBounds} arrSearch={arr} />
      </div>
    </EstateMapContainter>
  )
}

const mapStateToProps = ({arr}) => {
  return {
      arr:arr
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addArr: obj => dispatch(Actions.addArr(obj)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EstateMap)
