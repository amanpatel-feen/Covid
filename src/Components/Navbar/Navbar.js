import React ,{Component} from 'react';
import './Navbar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../../assets/virus.svg'

class Nav extends Component {
    render(){
        return(
                <div className="navbar">
                    <div className="icon"><img src={icon} alt="COVID'19"/></div>
                    <div><span>COVID'19</span></div>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href='/FAQ'>FAQ</a></li>
                        <li><a href='/HELPFUL-LINKS'>HELPFUL LINKS</a></li>
                    </ul>
                </div>

            
        )
    }
}

export default Nav