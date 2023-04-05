import { NavLink } from "react-router-dom";
import './style.css'
export const Header = () =>{

    return(
        <div className='header'>
        <NavLink className='link' to='/' replace>Main page</NavLink>
        <NavLink className='link' to='/search' replace>Search page</NavLink>
    </div>)
}