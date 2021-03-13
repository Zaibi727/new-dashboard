import React from 'react';
import './TopNav.css';

import { Link } from 'react-router-dom';

class TopNav extends React.Component {
    render() {
        return (
            <div className="TopNav">
               <section className="Top-Nav-section">
                   <div>
                     <a><h5>WEBSCALABLE</h5></a>
                   </div>
                   <div className="input-bar">
                       <a><i id="top-bar-searc-icon" class="fa fa-search"></i><input className="top-input-bar-ph" type="text" placeholder="Search"/></a>
                   </div>
                   <div className="top-nav-right-div">
                   <Link to="/createnew">
                     <div>
                         <button>
                             <a><i class="fa fa-plus-circle"></i>Create New</a>
                         </button>
                     </div>
                   </Link>
                   <div className="bell-icon">
                       <a><img src="/images/bell-regular.svg"/></a>
                   </div>
                   <div className="user-div">
                       <a><img className="user-img" src="/images/user-icon.jpeg"/></a>
                       <a>John doe</a>
                       <a><img src="/images/angle-down-solid.svg"/></a>
                   </div>
                   </div>
                   
               </section>
            </div>
          );
    }
}

export default TopNav;