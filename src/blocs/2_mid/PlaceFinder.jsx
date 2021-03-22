import PlaceFinderContainer from '../style/PlaceFinderContainer'
import Input from '../style/InptForm'
import Button from '../style/Button'
import PopularCities from './PopularCities'

export default function PF(){
    return <>
    <PlaceFinderContainer>
        <div className="cover"></div>
        <h1>Let Us Guite You Home</h1>
        <h2>Find the place of your dream</h2>
        <form action="#">
            <Input size={{width: '300px'}}>
                <input style={{ borderRadius: '5px', width: '300px'}} placeholder='Tel Aviv, Israel'/>
            </Input>
            <Input size={{width: '150px'}}>
                <input placeholder='Price'/>
                <button></button>
            </Input>
            <Input size={{width: '150px'}}>
                <input placeholder='Rooms'/>
                <button></button>
            </Input>
            <Button>Find Place</Button>
        </form>
    </PlaceFinderContainer>
    <PopularCities/>
    </>
}