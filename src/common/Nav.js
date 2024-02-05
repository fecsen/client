import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";

import '../styles/Nav.css'

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <p>펙센</p>
            </div>
            <div className="navbar-menu">
                <div className='navbar-menu-home'>
                    <li><h1><Link to = '/' ><IoHomeOutline/></Link></h1></li>
                    <li><Link to = '/' >HOME</Link></li>
                </div>

                <div className='navbar-menu-learning'>
                    <li><h1><Link to = '/learning' ><LuPencil /></Link></h1></li>
                    <li><Link to='/learning'>Learning</Link></li>
                </div>

                <div className='navbar-menu-project'>
                    <li><h1><Link to = '/project' ><FaBookOpen /></Link></h1></li>
                    <li><Link to='/project'>Project</Link></li>
                </div>

                <div className='navbar-menu-contact'>
                    <li><h1><Link to = '/contact' ><IoMdContact /></Link></h1></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </div>
                
                
                
               
            </div>

        </div>
    )
}

export default Navbar;