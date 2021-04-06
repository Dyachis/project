import EstatePageContainer from '../../style/containers/EstatePageContainer'
import Slider from '../../../components/slider/Slider'
import RentInfo from './RentInfo'


export default function EstatePage(){
    return <EstatePageContainer>
        <h1>Clean and cozy place in Tel Aviv</h1>
        <Slider/>
        <RentInfo/>
    </EstatePageContainer>
}