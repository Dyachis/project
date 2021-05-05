import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import icon from '../assets/svg/Arrow.svg'


function MyComponent({ size, center, latlng, setLatLng }) {

  const containerStyle = {
    width: size.width,
    height: size.height,
    borderRadius: '5px'
  };

  return <>
    <LoadScript
      googleMapsApiKey="AIzaSyBZHEa-5H2Y0u5OKBkjCXWT0rdknUrEj44"
    >
      <GoogleMap
        onClick={(e) => (setLatLng(e.latLng.toJSON()))}
        options={{
          disableDefaultUI: true,
          mapTypeControl: false,
          streetViewControl: false,
          clickableIcons: false,
          styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        
      >
        <Marker
            className={'mark'}
            position={latlng}
            onDragEnd={(e) => (setLatLng(e.latLng.toJSON()))}
            draggable={true}
            icon={icon}
            onClick={() => console.log(123)}
        />
      </GoogleMap>
    </LoadScript>
  </>
}

export default React.memo(MyComponent)