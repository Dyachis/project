import {useState} from 'react';
import Button from '../../blocs/style/Button'
import {useAuth} from '../../context/AuthContext'

export default function Login({setPopup, history}){

    const { login } = useAuth()
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        try {
            setLoading(true)
            await login(e.target.login.value, e.target.password.value)
            history.push('/home')
            setPopup()
        } catch {
            console.error('Failed to sing in')
        }
        setLoading(false)
    }
    return <form onSubmit={handleSubmit}>
        <input name='login' placeholder="Your login"/>
        <input name='password' type='password' placeholder="Your password"/>
        <div className='btns'>
            <Button onClick={() => {
                setPopup()
                history.push('/home')
                }}>
                Cancel
            </Button>
            <Button type="submit" disabled={loading} primary>Log in</Button>
        </div>
    </form>
}
