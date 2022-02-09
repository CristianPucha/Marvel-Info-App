import logo from '../../Assets/logo.png'
import menu from '../../Assets/menu-icon.png'
import spidermanjpg from '../../Assets/spiderman.png'
import capitanamerica from '../../Assets/capitanamerica.png'
import deadpool from '../../Assets/deadpool.png'
import hulk from '../../Assets/hulk.png'
import ironman from '../../Assets/ironman.png'
import strange from '../../Assets/strange.png'
import thanos from '../../Assets/thanos.png'
import thor from '../../Assets/thor.png'
import Spiderman from '../Spiderman/Spiderman'
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
                            <a href="">
                                <img src={capitanamerica} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={deadpool} alt="" />
                            </a>
                        </li>
                        <li><a href="">
                            <img src={hulk} alt="" /></a></li>
                        
                        
                        
                    </ul>
                </div>

            </nav>

                

        </header>
    )   
}

export default Navbar;