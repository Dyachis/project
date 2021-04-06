import Types from './actionTypes';

export function send({array}){
     return dispatch => {
        //  console.log(array);
            dispatch(
            {
                type:Types.send,
                payload:{
                    array
                }
            })
     }
}