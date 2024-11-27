import { useSelector } from 'react-redux';
import './App.css';
// import Counter from './components/Counter';
import Auth from './components/Auth'
import User from './components/User';
import Cart from './components/Cart/Cart';
import Header from './components/Header';

function App() {
 const isAuth =  useSelector(state => state.auth.isAuthenticated)
 const isCart =  useSelector(state => state.header.cartVisible)
  return (
    <>
    <Header/>
    {!isAuth && <Auth />}
    {isAuth && <User/>}
    {/* <Counter /> */}
    {isCart && <Cart />} 
    </>
  );
}

export default App;
