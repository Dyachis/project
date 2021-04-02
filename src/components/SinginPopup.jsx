import SinginPopupContainer from '../blocs/style/containers/SinginPopupContainer'
import Button from '../blocs/style/Button'

export default function SinginPopup({changePopup, toggleBlur}){

    function close(){
        changePopup()
        toggleBlur()
    }

    return <SinginPopupContainer>
        <div className="popup">
        <div className="x" onClick={() => close()}>
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
                        <Button onClick={() => close()}>
                            Cancel
                        </Button>
                        <Button primary>Next step</Button>
                    </div>
                </form>
            </div>
        </div>
    </SinginPopupContainer>
}