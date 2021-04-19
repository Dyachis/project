import SinginPopupContainer from '../blocs/style/containers/SinginPopupContainer'
import Button from '../blocs/style/Button'

export default function SinginPopup({changePopup}){

    const BASE_URL = 'java-7-team-a-account-service-ps5nojr72q-uc.a.run.app/'

    function register(){
        fetch(BASE_URL + '/user/registration', {
            "password": "Qwerty12$",
            "username": "nikolaev@mail.com"
        })
        .then(res => {
            console.log(res);
        })
        .then(req => {
            console.log(req);
        })
    }

    function login(){
        fetch(BASE_URL + 'user/account/get', {
            "password": "Qwerty12$",
            "username": "nikolaev@mail.com"
        })
        .then(res => {
            console.log(res);
        })
        .then(req => {
            console.log(req);
        })
    }
    login()

    return <SinginPopupContainer>
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
                        <Button onClick={() => changePopup()}>
                            Cancel
                        </Button>
                        <Button primary>Next step</Button>
                    </div>
                </form>
            </div>
        </div>
    </SinginPopupContainer>
}