import RangeSlider from '../rangeSlider/RangeSlider'

export default function FormPrice() {
    return <li className="dropdown" style={{backgroundColor:'white'}}>
        <div className="dropbtn">Price</div>
        <div className="dropdown-content">
            <div className='strelka'>&#9650;</div>
            <div className="boxes">
                <RangeSlider/>
            </div>
        </div>
    </li>
}