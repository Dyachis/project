import RentInfo from '../../style/RentInfo'
import person from '../../../assets/img/person.png'
import share from '../../../assets/img/share.png'
import Button from '../../style/Button'

export default function RntInfo(){
    return <RentInfo>
        <h4><img src={person} alt="bad"/><span>Emily Jonson</span><img src={share} alt=""/><span>Share</span><div className="grow"></div> <Button primary>Edit info</Button></h4>
        
    </RentInfo>
}