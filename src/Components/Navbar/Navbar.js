import React from "react";
import "./Navbar.css";
import icon from "../../assets/virus.svg";
import { NavLink, BrowserRouter,Switch, Route } from "react-router-dom";
import Home from '../Home/Home'
import Faq from '../FAQ/Faq'
import HelpfulLink from "../HelpfulLinks/Helpfullink";


const Navbar = () => {
  return (
    <BrowserRouter>
      <div className="navbar">
      <div className="icon">
        <img src={icon} alt="earth's antivirus" />
      </div>
      <div>
        <span>COVID'19</span>
      </div>
      <ul>
        <li>
          <NavLink to="/" className="itsnav">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/FAQ" className="itsnav">
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink to="/HelpfulLinks" className="itsnav">
            HelpFull Links
          </NavLink>
        </li>
      </ul>


      
    </div>
    <Switch>
    				<Route exact path='/'>
    					<Home country="IN" />
    				</Route>
    				<Route path='/FAQ'>
    					<Faq/>
    				</Route>
    				<Route path='/HelpfulLinks'>
    					<HelpfulLink/>
    				</Route>
    			</Switch>
    </BrowserRouter>
    
  );
};

export default Navbar;