import React, {useRef} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import icon from '../assets/svg/Arrow.svg'

function MyComponent({ draggableMarker, size, center, latlng, setLatLng, estateArr }) {
  const containerStyle = {
    width: size.width,
    height: size.height,
    borderRadius: '5px',
  }

  function dragMarker(e) {
    if (draggableMarker) setLatLng(e.latLng.toJSON())
    else console.log(e.latLng.toJSON());
  }

  let tmp = estateArr;
  const mapRef = useRef(null);

  function handleLoad(map) {
    mapRef.current = map;
  }

  function handleCenterChanged() {
    if (!mapRef.current) return;
    const newPos = mapRef.current.getBounds().contains({lat: 59.955413, lng: 30.337844});
    console.log(newPos);
  }

  return (
    <>
      <LoadScript googleMapsApiKey='AIzaSyBZHEa-5H2Y0u5OKBkjCXWT0rdknUrEj44'>
        <GoogleMap
          onClick={dragMarker}
          onLoad={handleLoad}
          onCenterChanged={handleCenterChanged}
          options={{
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
            tmp.map((e) => (
              <Marker key={e.position.lat} icon={icon} onClick={() => console.log(e.text)} position={e.position} />
            ))
          )}
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default React.memo(MyComponent)
