
import { Link } from 'react-router-dom';
import '../style/navbar.css'
function Navbar(){
    return(
        <nav className='navbar'>
         <div className='logo'>TO DO APP</div>
         <ul className='nav-links'>
            <li> <Link to="/">list</Link></li>
            <li> <Link to="/add">add task</Link></li>
         </ul>
        </nav>
    )
}
export default Navbar   