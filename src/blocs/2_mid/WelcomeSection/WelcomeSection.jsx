import WelcomeSectionContainer from '../../style/containers/WelcomeSectionContainer'
import WelcomeFormContainer from '../../style/containers/WelcomeFormContainer'
import Select from 'react-select';
import options from '../../../components/form/SelectOptions';
import FormPrice from '../../../components/form/FormPrice'
import FormRooms from '../../../components/form/FormRooms'
import InputButton from '../../../blocs/style/InputButton'

export default function WelcomeSection({
  showWelcomeSection,
}) {
  const style = {
    display: !showWelcomeSection && 'none',
  }

  return (
    <>
      <WelcomeSectionContainer>
        <div className='cover'></div>
        <h1 style={style}>Let Us Guite You Home</h1>
        <h2>Find the place of your dream</h2>
        <WelcomeFormContainer>
          <form action='#' onSubmit={(e) => Finder(e)}>
            <ul>
            <Select options={options} placeholder={'Enter city...'} className={'cityfield'} name='city' styles={{input: styles => ({ ...styles, minHeight: '40px' })}}/>
              <FormPrice />
              <FormRooms />
              <div className='inp'>
                <InputButton>
                  Find place
                  <input
                    className='search'
                    type='submit'
                    value='Search'
                  />
                </InputButton>
              </div>
            </ul>
          </form>
        </WelcomeFormContainer>
      </WelcomeSectionContainer>
    </>
  )
}

function Finder(e) {
  e.preventDefault()
  console.log(
    e.target.city.value,
    e.target.range.value,
    ' Rooms: ',
    e.target.oneroom.checked,
    e.target.tworoom.checked,
    e.target.threeroom.checked,
    e.target.fourroom.checked,
    e.target.fiveroom.checked
  )
}
