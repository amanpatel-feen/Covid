import React from "react";
import "./Navbar.css";
import icon from "../../assets/virus.svg";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../Home/Home'
import Faq from '../FAQ/Faq'
import HelpfulLink from "../HelpfulLinks/Helpfullink";


const Navbar = () => {
  return (
    <BrowserRouter>
      <div className="navbar">
      <div className="icon">
        <img src={icon} alt="#" />
      </div>
      <div>
        <span>COVID'19</span>
      </div>
      <nav>
            <ul>
              
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            
            
              <NavLink to="/FAQ" activeClassName="active">
                FAQ
              </NavLink>
            
            
              <NavLink to="/HelpfulLinks" className="itsnav">
                HelpFul Links
              </NavLink>
            
            </ul>
      </nav>
      


      
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