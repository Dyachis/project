import Types from './actionTypes';

export function send({ array }) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: Types.send,
                payload: {
                    array,
                },
            });
        }, 100);
    };
}
