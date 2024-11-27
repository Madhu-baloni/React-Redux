import { headerActions } from '../store/header';
import './style/header.css';
import { useDispatch } from 'react-redux';
const Header  = (props) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
      dispatch(headerActions.toggle());
    }

    return(
        <>
        <div className="header">
          <h1>Redux</h1>  
          <button onClick={handleToggle}>My Cart <span>1</span></button>
         
        </div>
        </>
    )


}
export default Header