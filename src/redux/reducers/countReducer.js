const initialState = {
    total: 0
}

const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';
const RESET_COUNT = 'RESET_COUNT';

export function increaseCount(num) {
    return {
        type: INCREASE_COUNT,
        payload: num
    }
}

export function decreaseCount(num) {
    return {
        type: DECREASE_COUNT,
        payload: num
    }
}

export function resetCount() {
    return {
        type: RESET_COUNT
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREASE_COUNT:
            return {
                ...state,
                total: state.total + action.payload
            }
        case DECREASE_COUNT:
            return {
                ...state,
                total: state.total - action.payload
            }
        case RESET_COUNT:
            return {
                ...state,
                total: 0
            }
        default:
            return state;
    }
}