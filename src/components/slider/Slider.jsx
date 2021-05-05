import ArrBtns from './ArrBtns.jsx'
import SliderContainer from './SliderContainer'
import { useState } from 'react'

export default function Slider({ imgsArr }){

    const [translateX, setTranslateX] = useState(0)

    function translateLeft(){
        if (translateX === 0) setTranslateX((imgsArr.length - 3) * 462)
        else setTranslateX(prev => prev - 462)
    }

    function translateRight(){
       if (translateX < (imgsArr.length - 3) * 462) setTranslateX(prev => prev + 462)
       else setTranslateX(0)
    }

    return (
        <>
        {imgsArr.length > 3 && <ArrBtns left onClick={translateLeft}/>}
        <SliderContainer
            pics={imgsArr.length} 
            translateX={translateX}
            >
            <div className="slider">
                {imgsArr.map((e, i) => (
                    <div key={i} className="img">
                        <img src={e} alt="img"/>
                    </div>
                ))}
            </div>
        </SliderContainer>
        {imgsArr.length > 3 && <ArrBtns onClick={translateRight}/>}
        </>
    )
}