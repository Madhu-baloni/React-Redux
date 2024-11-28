import "./style/Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counterStore";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  console.log(counter)
  const dispatch = useDispatch();

  const incrmentHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
     <div className="value">{counter.counter}</div> 
      <button onClick={incrmentHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler} className="toggle">Toggle</button>
    </main>
  );
};

export default Counter;
