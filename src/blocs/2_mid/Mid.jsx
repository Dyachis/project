import { useRef } from 'react'
import Mid from '../style/Mid'
import ViewPage from './Spring'

export default function Md(){

    const q = useRef()

    return <Mid>
        <ViewPage/>
        <h1 ref={q}>HUI</h1>
        <h1><button onClick={()=> console.log(q)}>Penis</button></h1>
    </Mid>
    
}