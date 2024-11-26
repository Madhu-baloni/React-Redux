import { useDispatch, useSelector } from "react-redux";
const Counter = () =>  {
    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter)
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({type:"increment"})
    }
    const handleDecrement = () => {
        dispatch({type:"decrement"})
    }
    const handleIncrease = () => {
      dispatch({type:"increase", value:5})
    }


   const handlerToggle = () => {
      dispatch({type:'toggle'})
   };
return (
    <>
    <main>
        <h1>Redux Counter</h1>
        <div>{counter}</div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase By 5</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handlerToggle}>Toggle Me</button>
    </main>
    </>
)
} 
export default Counter;