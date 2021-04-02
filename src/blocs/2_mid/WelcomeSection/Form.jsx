import InputForm from '../../style/InptForm';
import Button from '../../style/Button';

export default function Form({ city, setCity, price, setPrice, rooms, setRooms, showWelcomeSection, setWelcomeSection }) {
    return (
        <form action='#' onSubmit={() => {}}>
            <InputForm size={{ width: '300px' }}>
                <input
                    style={{ width: '300px' }}
                    placeholder='Tel Aviv, Israel'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <div className='drpdown'>
                    <p onClick={() => setCity('Ashkelon')}>Ashkelon</p>
                    <p onClick={() => setCity('Jerusalem')}>Jerusalem</p>
                    <p onClick={() => setCity('Tel Aviv')}>Tel Aviv</p>
                    <p onClick={() => setCity('Haifa')}>Haifa</p>
                </div>
            </InputForm>
            <InputForm size={{ width: '150px' }}>
                <input
                    placeholder='Price'
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}
                />
                <div className="drpdown drpdown__price">
                    <input 
                        type="range" 
                        className='drpdown__input'
                        min='100'
                        max='1000'
                        onChange={(e) => setPrice(e.target.value)}
                        />
                </div>
            </InputForm>
            <InputForm size={{ width: '150px' }}>
                <input 
                    placeholder='Rooms' 
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    />
                <div className="drpdown drpdown__rooms">
                    <div className='rooms'>
                        <div onClick={() => setRooms(1)}>1</div>
                        <div onClick={() => setRooms(2)}>2</div>
                        <div onClick={() => setRooms(3)}>3</div>
                        <div onClick={() => setRooms(4)}>4</div>
                        <div onClick={() => setRooms(5)}>5</div>
                        <div onClick={() => setRooms(6)}>6</div>
                    </div>
                </div>
            </InputForm>
            <Button onClick={() => setWelcomeSection(!showWelcomeSection)}>Find Place</Button>
        </form>
    );
}
