import EstateMapContainter from '../style/containers/EstateMapContainter'
import VerticalScroll from '../../components/VerticalScroll'
import PopularCities from './PopularCities';
import Map from '../../components/Map'

import FindForm from './FindForm'
import img from '../../assets/img/dom.png'
import { useState } from 'react';

function EstateMap(){

    const arr = [
        {img: img, name: 'Executive House in a Prestigious Area', area: '111', bads: 5, baths: 2, price: 1000, position: { lat: 59.955413, lng: 30.337844 }, text: '1'},
        {img: img, name: 'Executive House in a Prestigious Area', area: '222', bads: 5, baths: 2, price: 2000, position: { lat: 59.862413, lng: 30.337844 }, text: '2'},
        {img: img, name: 'Executive House in a Prestigious Area', area: '333', bads: 5, baths: 2, price: 3000, position: { lat: 59.885413, lng: 30.457844 }, text: '3'},
        {img: img, name: 'Executive House in a Prestigious Area', area: '444', bads: 5, baths: 2, price: 4000, position: { lat: 59.893413, lng: 30.377844 }, text: '4'},
        {img: img, name: 'Executive House in a Prestigious Area', area: '555', bads: 5, baths: 2, price: 5000, position: { lat: 59.952413, lng: 30.397844 }, text: '5'},
    ]

    const [latLang, setLatLang] = useState({lat: 59.95000, lng: 30.33000})

    return(
        <EstateMapContainter>
            <PopularCities changeCenter={setLatLang}/>
            <FindForm/>
            <div className="container">
                <div className="head"></div>
                <div className="section">
                    <VerticalScroll arr={arr}/>
                    <Map center={latLang} size={{width: '830px', height: '940px'}} estateArr={arr}/>
                </div>
            </div>
        </EstateMapContainter>
    )
}


export default EstateMap