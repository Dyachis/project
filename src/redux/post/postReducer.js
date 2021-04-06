import Types from './actionTypes'

const init = {
    array:[]
}

export default function postReducer(state = init, {type,payload}){

    switch(type){
        case Types.send:
            console.log(payload); 
            return{
            ...state,
            array:payload.array
        }
        // case Types.remove:
        //     return{
        //         ...state,
        //         posts:state.posts.filter((p) => p.title.id !== payload.id)
        // }
        // case Types.change:
        //     const tmp = [...state.posts];
        //     tmp[payload.id.id] = {...tmp[payload.id.id],status:payload.id.status};
        //     return {
        //         ...state,
        //         posts:[...tmp]
        // }
        default:return state;
    }
}