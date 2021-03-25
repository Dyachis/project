import SinginPopupContainer from '../blocs/style/SinginPopupContainer'
import Button from '../blocs/style/Button'

export default function Popup({changePopup}){
    return <SinginPopupContainer>
        <div className="blur">HUI</div>
        <div className="popup">
        <div className="x" onClick={() => changePopup()}>
            <div></div>
            <div></div>
        </div>
            <h1>What about you?</h1>
            <div className="loginForm">
                <form action="">
                    <input placeholder="Your name"/>
                    <input placeholder="Your name"/>
                    <input placeholder="Your name"/>
                    <div className='btns'>
                        <Button onClick={() => changePopup()}>Cancel</Button>
                        <Button primary>Next step</Button>
                    </div>
                </form>
            </div>
        </div>
    </SinginPopupContainer>
}