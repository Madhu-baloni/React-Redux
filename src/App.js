import { useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import Auth from './components/Auth'
import UserProfile from './components/UserProfile';
import Header from './components/Header';


function App() {
 const isAuth =  useSelector((state) => state.auth.isAuthenticated)
  return (
    <>
     <Header/>
    {!isAuth && <Auth />}
    {isAuth && <UserProfile/>}
    <Counter />
   
    </>
  );
}

export default App;
