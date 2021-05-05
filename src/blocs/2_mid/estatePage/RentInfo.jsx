import RentInfo from '../../style/RentInfo'
import person from '../../../assets/img/person.png'
import share from '../../../assets/img/share.png'
import bath from '../../../assets/img/bath.png'
import area from '../../../assets/img/area.png'
import bad from '../../../assets/img/bad.png'
import Button from '../../style/Button'
import deleteEstate from '../../../firebase/functions/deleteFromStore'
import { useHistory } from 'react-router'

export default function RntInfo({ estate, estateId }) {
    const history = useHistory()

    function del(){
        deleteEstate('rent-estates', estateId)
        history.push('/profile')
    }

  return (
    <RentInfo>
      <h4>
        <img src={person} alt='bad' />
        <span>{estate.owner}</span>
        <img src={share} alt='' />
        <span>Share</span>
        <div className='grow'></div>
        <Button primary>Edit info</Button>
      </h4>
      <div className='payload'>
        <div className='name'>{estate.name}</div>
        <div className='area'>
          <img src={area} alt='' />
          {estate.area} m²
        </div>
        <div className='bads'>
          <img src={bad} alt='' />
          {estate.bads} bads
        </div>
        <div className='baths'>
          <img src={bath} alt='' />
          {estate.baths} baths
        </div>
        <div className='price'>₪ {estate.price}</div>
      </div>
      <button onClick={del}>Delete</button>
    </RentInfo>
  )
}
