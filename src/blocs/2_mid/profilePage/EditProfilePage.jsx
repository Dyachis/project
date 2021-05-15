import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserPageContainer from '../../style/containers/UserPageContainer'
import Button from '../../style/Button'
import { useAuth } from '../../../context/AuthContext'
import userFireHook from '../../../firebase/hooks/userFireHook'
import editUserInfo from '../../../firebase/functions/editUserInfo'

export default function UserPage({ history }) {
  const { currentUser } = useAuth()
  const { profile } = userFireHook(currentUser.email)
  const [userObj, setUserObj] = useState(profile)

  useEffect(() => {
    setUserObj(profile)
  }, [profile])

  if (!currentUser) {
    history.push('/home')
    return
  }

  function handleUserObj(type, payload) {
    switch (type) {
      case 'name':
        setUserObj({ ...userObj, name: payload })
        break
      case 'lastname':
        setUserObj({ ...userObj, lastname: payload })
        break
      case 'info':
        setUserObj({ ...userObj, info: payload })
        break
      default:
    }
  }

  return (
    <UserPageContainer>
      <button onClick={() => console.log(userObj)}>LOG</button>
      <div className='profile'>
        <h3>Profile</h3>
        <div className='container'>
          <div className='img'>
            <img src={profile.profileImg} alt='' />
          </div>
          <h3>
            <input type='text' value={userObj.name} onChange={(e) => handleUserObj('name', e.target.value)} />
            <input type='text' value={userObj.lastname} onChange={(e) => handleUserObj('lastname', e.target.value)} />
          </h3>
          <Link to='/profile/edit'>
            <Button primary onClick={() => editUserInfo(userObj)}>Save</Button>
          </Link>
        </div>
      </div>
      <div className='info'>
        <h3>Household information</h3>
        <input type='text' value={userObj.info} onChange={(e) => handleUserObj('info', e.target.value)} />
      </div>
    </UserPageContainer>
  )
}
