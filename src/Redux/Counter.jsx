import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckking, increment } from "../App/CounterFeatures/Action";

const Counter = () => {
    let {count} = useSelector(state => state.counter);
    console.log(count)
    const dispatch = useDispatch();
    return (
       <div>
        <button onClick={() => dispatch(decrementWithCheckking(1))}>-</button>
        {' '} <span>{count}</span> {' '}
        <button onClick={() => dispatch(increment(1))}>+</button>
       </div> 
    )
}

export default Counter;