import PopularCitiesContainer from '../style/containers/PopularCitiesContainer'

export default function PC({changeCenter}){

    const cities = [
        {city: 'New York', location: {lat: 40.73, lng: -73.93}},
        {city: 'Rome', location: {lat: 41.90, lng: 12.49}},
        {city: 'Los Angeles', location: {lat: 34.05, lng: -118.24}},
        {city: 'Tel Aviv', location: {lat: 32.10, lng: 34.85}},
    ]

    return <PopularCitiesContainer>
        <h1>Popular cities</h1>
        <div className="popularCities">
            {cities.map(e => (
                <div 
                key={e.location.lat}
                    className="PopularCities__city"
                    onClick={() => changeCenter(e.location)}
                >
                    <h2>{e.city}</h2>
                </div>
                ))}
        </div>
    </PopularCitiesContainer>
}