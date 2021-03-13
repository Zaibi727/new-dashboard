import React from 'react';
import './Settings.css';
import SettingsNav from './SettingsNav/SettingsNav';
import ProfileSetting from './ProfileSetting/ProfileSetting';
import Security from './Security/Security';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class Settings extends React.Component {
    render(){
        return (
            <div className="Settings">
                    <Router>
                        <SettingsNav />
                         <Switch>
                             <Route path="/profilesetting" component={ProfileSetting}/>
                             <Route path="/security" component={Security}/>
                         </Switch>
                    </Router>
            </div>
        );
    }
}
export default Settings;