import { useSelector } from "react-redux";
const Counter = () =>  {
    const counter = useSelector(state => state.counter)

   const handlerToggle = () => {
      
   };
return (
    <>
    <main>
        <h1>Redux Counter</h1>
        <div>{counter}</div>
        <button onClick={handlerToggle}>Toggle Me</button>
    </main>
    </>
)
} 
export default Counter;