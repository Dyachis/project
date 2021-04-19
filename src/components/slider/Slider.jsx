import ArrBtns from './ArrBtns.jsx'
import SliderContainer from './SliderContainer'
import tel1 from '../../assets/img/tel1.png'
import tel2 from '../../assets/img/tel2.png'
import tel3 from '../../assets/img/tel3.png'
import { useState } from 'react'

export default function Slider(){

    const arr = [tel1, tel2, tel3, tel1, tel2]
    const [translateX, setTranslateX] = useState(0)

    function translateLeft(){
        if (translateX < (arr.length - 3) * 462) {
            setTranslateX(prev => prev + 462)
        } else {
            setTranslateX(0)
        }
    }

    function translateRight(){
       if (translateX < (arr.length - 3) * 462) {
            setTranslateX(prev => prev + 462)
        } else {
            setTranslateX(0)
        }
        console.log(translateX);
    }

    return (
        <>
        <ArrBtns left onClick={translateLeft}/>
        <SliderContainer 
            translateX={translateX}
            >
            <div className="slider">
                {arr.map((e, i) => (
                    <div key={i} className="img">
                        <img src={e} alt="img"/>
                    </div>
                ))}
            </div>
        </SliderContainer>
        <ArrBtns onClick={translateRight}/>
        </>
    )
}