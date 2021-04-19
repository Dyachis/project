import Types from './actionTypes';

export function getTheArr() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: Types.getTheArr,
            });
        }, 100);
    };
}