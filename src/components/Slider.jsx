import SliderContainer from '../blocs/style/Slider'
import img from '../assets/img/dom.png'
import nyc from '../assets/img/nyc.png'
import rome from '../assets/img/rome.png'
import { useState } from 'react'

export default function Slider(){

    const [arr, setArr] = useState([
        img, nyc, rome, img
    ])
    const [firstSlide, setfirstSlide] = useState(0)

    function plus(){
        setfirstSlide(prev => prev + 1)
    }
    function minus(){
        setfirstSlide(prev => prev - 1)
    }

    return <SliderContainer>
        <button onClick={plus}>PLUS</button>
        <button onClick={minus}>MINUS</button>
        {arr.map((e, i) => {
            if (i > firstSlide) {
                return <div className='img'>
                    <img src={e} alt='img'/>
                </div>
            }
        })}
        
    </SliderContainer>
}