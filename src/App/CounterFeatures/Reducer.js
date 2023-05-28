import * as CounterFeatures from './Constans';

let initialState = {
    count: 0
}

const CounterReducer = (state = initialState, action) => {
   switch(action.type) {
    case CounterFeatures.INC:
        return {
            ...state,
            count: state.count + action.value
        }
    case CounterFeatures.DEC:
        return {
            count: state.count -  action.value
        }
    default:
        return state
   }
}

export default CounterReducer;