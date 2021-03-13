import React from 'react';
import './SettingsNav.css';
import {Link} from 'react-router-dom';


class SettingsNav extends React.Component {
    render(){
        return (
            <div className="settingsNav">
                   <section className="settings-nav-bar">
                     <ul className="settings-nav-bar-ul">
                       <Link className="settingnav-LINK" to="/profilesetting">
                         <li><a>Profile setting</a></li>
                       </Link>
                       <Link className="settingnav-LINK" to="/security">
                         <li><a>Security</a></li>
                       </Link>
                     </ul>
                   </section>
            </div>
        );
    }
}
export default SettingsNav;