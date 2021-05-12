import Types from './actionTypes'

const init = {
    arr:{}
}

export default function findReducer(state = init, {type,payload}){

    switch(type){
        case Types.add: 
            return{
            ...state,
            arr:payload.arr
        }
        default:return state;
    }
}