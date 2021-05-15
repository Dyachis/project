import { Link } from 'react-router-dom'
import UserPageContainer from '../../style/containers/UserPageContainer'
import VerticalScroll from '../../../components/VerticalScroll'
import Button from '../../style/Button'
import { useAuth } from '../../../context/AuthContext'
import estateFireHook from '../../../firebase/hooks/estateFireHook'
import userFireHook from '../../../firebase/hooks/userFireHook'

export default function UserPage({ history }) {
  const { currentUser } = useAuth()

  if (!currentUser) {
    history.push('/home')
    return
  }

  const { estates } = estateFireHook(currentUser.email)
  const { profile } = userFireHook(currentUser.email)

  return (
    <UserPageContainer>
      <div className='profile'>
        <h3>Profile</h3>
        <div className='container'>
          <div className='img'>
            <img src={profile.profileImg} alt='' />
          </div>
          <h3>
            {profile.name} {profile.lastname}
          </h3>
            <Link to='/profile/edit'><Button primary>Edit</Button></Link>
        </div>
      </div>
      <div className='info'>
        <h3>Household information</h3>
        <p>{profile.info}</p>
      </div>
      <div className='houses'>
        <h3>Your properties</h3>
        <VerticalScroll arr={estates} />
      </div>
    </UserPageContainer>
  )
}
