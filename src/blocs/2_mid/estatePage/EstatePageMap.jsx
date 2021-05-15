import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import icon from '../../../assets/svg/Arrow.svg'

function Map({ size, center }) {
  
  const containerStyle = {
    width: size.width,
    height: size.height,
    borderRadius: '5px',
  }

  return (
    <>
      <LoadScript googleMapsApiKey='AIzaSyBZHEa-5H2Y0u5OKBkjCXWT0rdknUrEj44'>
        <GoogleMap
          options={{
            disableDefaultUI: true,
            mapTypeControl: false,
            streetViewControl: false,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
          }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          >
          <Marker
            className={'mark'}
            position={center}
            icon={icon}
            />
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default React.memo(Map)

