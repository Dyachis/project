import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import icon from '../assets/svg/Arrow.svg'

function MyComponent({ draggableMarker, size, center, latlng, setLatLng }) {
  const containerStyle = {
    width: size.width,
    height: size.height,
    borderRadius: '5px',
  }

  const state = [
    { position: { lat: 59.955413, lng: 30.337844 }, text: '1' },
    { position: { lat: 59.855413, lng: 30.437844 }, text: '2' },
    { position: { lat: 59.755413, lng: 30.537844 }, text: '2' },
  ]

  function dragMarker(e) {
    if (draggableMarker) setLatLng(e.latLng.toJSON())
  }

  return (
    <>
      <LoadScript googleMapsApiKey='AIzaSyBZHEa-5H2Y0u5OKBkjCXWT0rdknUrEj44'>
        <GoogleMap
          onClick={dragMarker}
          options={{
            clickableIcons: false,
            disableDefaultUI: true,
            mapTypeControl: false,
            streetViewControl: false,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
          }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
        >
          {draggableMarker ? (
            <Marker
              className={'mark'}
              position={latlng}
              onDragEnd={(e) => setLatLng(e.latLng.toJSON())}
              draggable={true}
              icon={icon}
            />
          ) : (
            state.map((e) => (
              <Marker key={e.position.lat} icon={icon} onClick={() => console.log(e.text)} position={e.position} />
            ))
          )}
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default React.memo(MyComponent)
