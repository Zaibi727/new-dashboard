import React from 'react';
import Websites from '../Websites/Websites';
import Teams from '../Teams/Teams';
import Settings from '../Settings/Settings';
import Biling from '../Billing/Billing';
import HelpSupport from '../HelpSupport/HelpSupport';

import './SideNav.css';
import { Link } from 'react-router-dom';


class SideNav extends React.Component{
    render(){
        return (
            <div className="SideNav">
                   <ul className="side-nav-ul">
                       <Link className="Link" to="/">
                         <li className="h4">
                           <h4>DASHBOARD</h4>
                        </li>
                       </Link>
                        <Link className="Link" to="/websites">
                           <li className="li">
                              <a><i class="fa fa-chrome fa-lg"></i></a> 
                              <a>Websites</a>
                           </li>
                        </Link>
                        <Link className="Link" to="/teams">
                          <li  className="li">
                             <a><i class="fa fa-users fa-lg"></i></a>
                             <a>Teams</a>    
                          </li>
                        </Link>
                        <Link className="Link" to="/settings">
                           <li  className="li">
                             <a><i class="fa fa-cog fa-lg"></i></a>
                             <a>Settings</a>
                           </li>
                        </Link>
                         <Link className="Link" to="/billing">
                            <li  className="li">
                             <a><i class="fa fa-dollar fa-lg"></i></a>
                             <a>Billing</a>
                           </li>
                         </Link>
                         <Link className="Link" to="/helpsupport">
                         <li  className="li">
                              <a><i  class="fa fa-question-circle fa-lg"></i></a>
                              <a>Help & support</a>
                        </li>
                         </Link>
                   </ul>
            </div>
          );
    }
  
}

export default SideNav;