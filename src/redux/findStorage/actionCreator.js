import Types from './actionTypes';

export function addArr({arr}){
     return dispatch => {
            dispatch(
            {
                type:Types.add,
                payload:{
                    arr
                }
            })
     }
}
