import Types from './actionTypes';
import img from '../../assets/img/dom.png'

const init = {
    array: [
        [
            {login: 'q', password: 'q'}
        ],
        [{img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 1000},
        {img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 3000},
        {img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 2000},
        {img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 1500},
        {img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 5000}]
    ],
};

export default function postReducer(state = init, { type, payload }) {
    switch (type) {
        case Types.getUsers:
            return {
                ...state,
                array: payload.array,
            };

        default:
            return state;
    }
}
