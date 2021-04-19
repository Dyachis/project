import EstateMapContainter from '../style/containers/EstateMapContainter'
import VerticalScroll from '../../components/VerticalScroll'
import PopularCities from './PopularCities';
import Map from '../../components/Map'
import {connect} from 'react-redux';

import * as Actions from '../../redux/post/actionCreator'
import FindForm from './FindForm'
import img from '../../assets/img/dom.png'
import { useState } from 'react';

function EstateMap({array, send}){

    const arr = [
        {img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 1000},
        {img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 3000},
        {img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 2000},
        {img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 1500},
        {img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 5000},
    ]
    const [latLang, setLatLang] = useState({lat: 59.95, lng: 30.33})

    send({
        array:arr
    })

    return(
        <EstateMapContainter>
            <PopularCities changeCenter={setLatLang}/>
            <FindForm/>
            <div className="container">
                <div className="head"></div>
                <div className="section">
                    <VerticalScroll arr={arr}/>
                    <Map center={latLang} size={{width: '830px', height: '940px'}}/>
                </div>
            </div>
        </EstateMapContainter>
    )
}

const mapStateToProps = ({array}) => {
    return {
        array:array
    }
}

const mapDispatchToProps = dispatch => {
    return {
        send: array => dispatch(Actions.send(array)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EstateMap);