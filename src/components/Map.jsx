import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import icon from '../assets/svg/Arrow.svg'


function MyComponent({ size, center }) {
  
  const containerStyle = {
    width: size.width,
    height: size.height,
    borderRadius: '5px'
  };

    const state = [
        {position: {lat:59.955413, lng:30.337844}, text: '1'},
        {position: {lat:59.855413, lng:30.437844}, text: '2'}
      ]

  return <>
    <LoadScript
      googleMapsApiKey="AIzaSyBZHEa-5H2Y0u5OKBkjCXWT0rdknUrEj44"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
      >
        {state.map(e => <Marker key={e.position.lat} icon={icon} onClick={() => console.log(e.text)} position={e.position}/>)}
      </GoogleMap>
    </LoadScript>
  </>
}

export default React.memo(MyComponent)