import React, { useRef, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import icon from '../assets/svg/Arrow.svg'

let delay

function MyComponent({ draggableMarker, size, center, latlng, setLatLng, estates, setEstatesOnBounds }) {
  const mapRef = useRef(null)

  const containerStyle = {
    width: size.width,
    height: size.height,
    borderRadius: '5px',
  }

  function dragMarker(e) {
    if (draggableMarker) setLatLng(e.latLng.toJSON())
  }

  function handleLoad(map) {
    mapRef.current = map
  }

  function handleCenterChanged() {
    clearTimeout(delay)
    if (!draggableMarker) {
      if (!mapRef.current) return
    delay = setTimeout(() => {
        setEstatesOnBounds(checkIfEstateInBounds())
      }, 1000)
    }
  }

  function checkIfEstateInBounds() {
    if (draggableMarker) return
    let tmp = estates.filter((e) => mapRef.current.getBounds().contains(e.latlng) === true)
    return tmp
  }

  useEffect(() => {
    if (draggableMarker) return
    setEstatesOnBounds(checkIfEstateInBounds())
    // eslint-disable-next-line
  }, [estates])


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
          zoom={14}
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
            estates.map((e) => <Marker key={e.latlng.lat} icon={icon} position={e.latlng} />)
          )}
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default React.memo(MyComponent)
