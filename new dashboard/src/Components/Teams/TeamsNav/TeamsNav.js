import React from 'react';
import './TeamsNav.css';
import {Link} from 'react-router-dom';


class   TeamsNav extends React.Component {
    render(){
        return (
            <div className="TeamsNav">
                   <section className="teams-nav-bar">
                     <ul className="websites-nav-bar-ul">
                       <Link className="teamnav-LINK" to="/teamsettings">
                         <li><a>Teams setting</a></li>
                       </Link>
                       <Link className="teamnav-LINK" to="/teamwebsites">
                         <li><a>Websites</a></li>
                       </Link>
                       <Link className="teamnav-LINK" to="/teamhistory">
                         <li><a>History</a></li>
                       </Link>
                       <Link className="teamnav-LINK" to="/teamdelete">
                         <li><a>Delete</a></li>
                       </Link>
                     </ul>
                   </section>
            </div>
        );
    }
}
export default TeamsNav;