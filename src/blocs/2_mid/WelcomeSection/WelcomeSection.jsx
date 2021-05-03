import { Transition } from 'react-spring/renderprops';
import { useState } from 'react'
import WelcomeSectionContainer from '../../style/containers/WelcomeSectionContainer'
import Form from './Form'

export default function WelcomeSection({
  setWelcomeSection,
  showWelcomeSection,
}) {
  const [city, setCity] = useState('')
  const [price, setPrice] = useState('')
  const [rooms, setRooms] = useState('')

  const style = {
    display: !showWelcomeSection && 'none',
  }

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
}
