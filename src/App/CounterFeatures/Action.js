import * as CounterFeatures from './Constans';

export const increment = (value) => {
    return {
        type: CounterFeatures.INC,
        value: value
    }
}

export const decrement = (value) => {
    return {
        type: CounterFeatures.DEC,
        value: value
    }
}

export const decrementWithCheckking = (value) => {
    return(dispatch, getState) => {
        if(getState().counter.count > 0) {
            dispatch(decrement(value));
        }
    }
}