import Types from './actionTypes';

const init = {
    array: [],
};

export default function postReducer(state = init, { type, payload }) {
    switch (type) {
        case Types.send:
            return {
                ...state,
                array: payload.array,
            };

        default:
            return state;
    }
}
