import logo from '../../Assets/logo.png'
import menu from '../../Assets/menu-icon.png'
import spidermanjpg from '../../Assets/spiderman.png'
import capitanamerica from '../../Assets/capitanamerica.png'
import ironman from '../../Assets/ironman.png'
import hulk from '../../Assets/hulk.png'
import thor from '../../Assets/thor.png'
import strange from '../../Assets/strange.png'
import blackpanther from '../../Assets/blackpanther.png'

import arrows from '../../Assets/arrows.png'
import './Navbar.css'
import {Link, Routes, Route} from 'react-router-dom'


function Navbar () {
    
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

    function display (){
        

        document.querySelector('.hambicon').onClick = document.querySelector('.ullist').classList.toggle('show')
    }


    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'>
                    <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className='hamb'>
                    <img src={menu} className="hambicon" alt="hamburguermenu" onClick={display}/>
                    <ul className="ullist">
                        <li>
                            <Link to="spider-man">
                                <img src={spidermanjpg} alt="" />
                            </Link>
                        </li>
                        <li>
                            <img src={arrows} className='arrowsleft' alt="" />
                        </li>
                        
                        <li>
                            <a href="captain-america">
                                <img src={capitanamerica} alt="" />
                            </a>
                        </li>
                       
                        <li><a href="hulk">
                            <img src={hulk} alt="" /></a>
                        </li>
                        <li><a href="iron-man">
                            <img src={ironman} alt="" /></a>
                        </li>
                        <li><a href="thor">
                            <img src={thor} alt="" /></a>
                        </li>
                        <li><a href="doctor-strange">
                            <img src={strange} alt="" /></a>
                        </li>
                        <li><a href="black-panther">
                            <img src={blackpanther} alt="" /></a>
                        </li>
                        
                        
                        
                        
                        
                    </ul>
                </div>

            </nav>

                

        </header>
    )   
}

export default Navbar;