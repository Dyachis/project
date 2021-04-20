import EstatePageContainer from '../../style/containers/EstatePageContainer'
import Slider from '../../../components/slider/Slider'
import RentInfo from './RentInfo'
import app from '../../../firebase'

export default function EstatePage(){
    function handler(e){
        const file = e.target.files[0]
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(() => {
            console.log('Upload file');
        })
    }
    return <EstatePageContainer>
        <h1>Clean and cozy place in Tel Aviv</h1>
        <Slider/>
        <RentInfo/>
        <input type="file" onChange={handler}/>
    </EstatePageContainer>
}