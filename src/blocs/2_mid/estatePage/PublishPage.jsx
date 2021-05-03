import Button from '../../style/Button'
import EditContainer from '../../style/containers/EditContainer'
import publishEstate from '../../../firebase/functions/publishEstate'
import { useAuth } from '../../../context/AuthContext'


export default function PublishPage() {

  const {currentUser} = useAuth()

  function handleSubmit(e){
    e.preventDefault()
    publishEstate(e, currentUser)
  }

  return (
    <EditContainer>
      <h1>Publish your property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>
            Name
          </label>
            <input name='name' id='name' type='text' />
        </div>
        <div>
          <label htmlFor='bads'>
            Bads
          </label>
            <input id='bads' name='bads' type='number' />
        </div>
        <div>
          <label htmlFor='baths'>
            Baths
          </label>
            <input id='baths' name='baths' type='number' />
        </div>
        <div>
          <label htmlFor='area'>
            Area
          </label>
            <input id='area' name='area' type='number' />
        </div>
        <div>
          <label htmlFor='price'>
            Price
          </label>
            <input id='price' name='price' type='number' />
        </div>
        <div>
          <label htmlFor='file'>
            Img
          </label>
            <input id='file' name='file' type='file' />
        </div>
        <div>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </EditContainer>
  )
}
