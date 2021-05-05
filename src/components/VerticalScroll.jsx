import { useHistory } from "react-router";
import VerticalScroll from "../blocs/style/containers/VerticalScroll";
import bath from '../assets/img/bath.png'
import area from '../assets/img/area.png'
import bad from '../assets/img/bad.png'

export default function VS({ arr }){
    let history = useHistory()

    return (
        <VerticalScroll>
            {arr.map(e => (
                <div className='card' key={e.id} onClick={() => history.push(`estate/${e.id}`)}>
                    <img src={e.img} alt="img"/>
                    <div className='payload'>
                        <div className='name'>{e.name}</div>
                        <div className='area'><img src={area} alt=""/>{e.area} m²</div>
                        <div className='bads'><img src={bad} alt=""/>{e.bads} bads</div>
                        <div className='baths'><img src={bath} alt=""/>{e.baths} baths</div>
                        <div className='price'>₪ {e.price}</div>
                    </div>
                </div>
            ))}
        </VerticalScroll>
    )
}