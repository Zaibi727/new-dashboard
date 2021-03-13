import React from 'react';
import './WebsitesNav.css';
import {Link} from 'react-router-dom';


class WebsitesNav extends React.Component {
    render(){
        return (
            <div className="WebsitesNav">
                   <section className="websites-nav-bar">
                     <ul className="websites-nav-bar-ul">
                       <Link className="webnav-LINK" to="/credentials">
                         <li><a>Credentials</a></li>
                       </Link>
                       <Link className="webnav-LINK" to="/staging">
                         <li><a>Staging</a></li>
                       </Link>
                       <Link className="webnav-LINK" to="/analytics">
                         <li><a>Analytics</a></li>
                       </Link>
                       <Link className="webnav-LINK" to="/history">
                         <li><a>History</a></li>
                       </Link>
                       <Link className="webnav-LINK" to="/upgrade">
                         <li><a>Upgrade</a></li>
                       </Link>
                       <Link className="webnav-LINK" to="/destroy">
                         <li><a>Destroy</a></li>
                       </Link>
                     </ul>
                   </section>
            </div>
        );
    }
}
export default WebsitesNav;