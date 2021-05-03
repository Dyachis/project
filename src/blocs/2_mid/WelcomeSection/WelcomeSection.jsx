<<<<<<< HEAD
import WelcomeSectionContainer from '../../style/containers/WelcomeSectionContainer';
import FormSelect from '../../../components/form/FormSelect';
import FormPrice from '../../../components/form/FormPrice';
import FormRooms from '../../../components/form/FormRooms';
import WelcomeFormContainer from '../../style/containers/WelcomeFormContainer';
import InputButton from '../../../blocs/style/InputButton';
=======
import { Transition } from 'react-spring/renderprops';
import { useState } from 'react'
import WelcomeSectionContainer from '../../style/containers/WelcomeSectionContainer'
import Form from './Form'
>>>>>>> firebase

export default function WelcomeSection({
  setWelcomeSection,
  showWelcomeSection,
}) {
<<<<<<< HEAD
=======
  const [city, setCity] = useState('')
  const [price, setPrice] = useState('')
  const [rooms, setRooms] = useState('')
>>>>>>> firebase

  const style = {
    display: !showWelcomeSection && 'none',
  }

<<<<<<< HEAD
    return (
        <>
            <WelcomeSectionContainer>
                <div className='cover'></div>
                <h1 style={style}>Let Us Guite You Home</h1>
                <h2>Find the place of your dream</h2>
                <WelcomeFormContainer>
                    <form action="#"  onSubmit={(e) => Finder(e)}>
                        <ul>
                            <FormSelect/>
                            <FormPrice/>
                            <FormRooms/>
                                <div className='inp'>
                            <InputButton>
                                    Find place
                                    <input className='search' type="submit" value="Search"/>
                            </InputButton>
                                </div>
                        </ul>
                    </form>
                </WelcomeFormContainer>
            </WelcomeSectionContainer>
        </>
    );
=======
  return (
    <Transition
      items={showWelcomeSection}
      enter={{
        opacity: 1,
        height: '540px',
        transform: 'translateY(0)',
      }}
      leave={{
        opacity: 0,
        height: '0px',
        transform: 'translateY(-500px)',
      }}
      from={{
        opacity: 1,
        height: '540px',
        transform: 'translateY(0)',
      }}
    >
      {(item) =>
        item &&
        ((props) => (
          <WelcomeSectionContainer style={props}>
            <div className='cover'></div>
            <h1 style={style}>Let Us Guite You Home</h1>
            <h2>Find the place of your dream</h2>
            <Form
              style={style}
              city={city}
              setCity={setCity}
              price={price}
              setPrice={setPrice}
              rooms={rooms}
              setRooms={setRooms}
              setWelcomeSection={setWelcomeSection}
              showWelcomeSection={showWelcomeSection}
            />
          </WelcomeSectionContainer>
        ))
      }
    </Transition>
  )
>>>>>>> firebase
}

function Finder(e) {
    e.preventDefault();
    console.log(
        e.target.city.value,
        e.target.range.value,
        ' Rooms: ',
        e.target.oneroom.checked,
        e.target.tworoom.checked,
        e.target.threeroom.checked,
        e.target.fourroom.checked,
        e.target.fiveroom.checked,
    );
}