import { useDispatch, useSelector } from "react-redux";
import  {counterActions}  from "../store/counterStore";
import './style/Counter.css';

const Counter = () =>  {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(counterActions.increment())
    }
    const handleDecrement = () => {
        dispatch(counterActions.decrement())
    }
    const handleIncrease = () => {
      dispatch(counterActions.increase(5))
    }

return (
    <>
    <main>
        <h1>Counter</h1>
        <div className="count">{counter}</div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase By 5</button>
        <button onClick={handleDecrement}>Decrement</button>
        
    </main>
    </>
)
} 
export default Counter;