import {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../blocs/style/Button'
import { useAuth } from '../../context/AuthContext'

export default function Register({setPopup, history}){

    const { singup } = useAuth()
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        if (e.target.password.value !== e.target.password2.value || e.target.password.value === ''){
            return console.error('Failed password conformation')
        } 
        try {
            setLoading(true)
            await singup(e.target.login.value, e.target.password.value)
        } catch {
            console.error('Failed to create an account')
        }
        setLoading(false)
    }
    return <form action='#' onSubmit={handleSubmit}>
        <input name='login' placeholder="Your login"/>
        <input name='password' type='password' placeholder="Your password"/>
        <input name='password2' type='password' placeholder="Your password Confirmation"/>
        <p>Already have an account? <Link to='/home/login'>Register</Link></p>
        <div className='btns'>
            <Button onClick={() => {
                setPopup()
                history.push('/home')
                }}>
                Cancel
            </Button>
            <Button type="submit" disabled={loading} primary>Next step</Button>
        </div>
    </form>
}
