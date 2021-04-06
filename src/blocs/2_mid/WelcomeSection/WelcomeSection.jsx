import WelcomeSectionContainer from '../../style/containers/WelcomeSectionContainer';
import Form from './Form';
import { useState } from 'react';

export default function WelcomeSection({
    setWelcomeSection,
    showWelcomeSection,
}) {
    const [city, setCity] = useState('');
    const [price, setPrice] = useState('');
    const [rooms, setRooms] = useState('');

    const style = {
        display: !showWelcomeSection && 'none'
    }

    return (
        <>
            <WelcomeSectionContainer>
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
        </>
    );
}
