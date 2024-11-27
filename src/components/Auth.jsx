import './style/Auth.css';
import { authActions } from '../store/auth';
import {useDispatch} from 'react-redux'

const Auth = () => {
  const dispatch = useDispatch();
  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login())
  }
  

  return (
    <>
    <div className="form">
      <h1>Form</h1>
      <br/>
      <form>
        <input className='input-box' type="text" placeholder="name"></input>
        <input className="input-box" type="text" placeholder="password"></input>
        <button onClick={loginHandler}>Login</button>
      </form>
      </div>
    </>
  );
};

export default Auth;
