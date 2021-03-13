import React from 'react';
import './Teams.css';
import TeamsNav from './TeamsNav/TeamsNav';
import Teamsettings from './Teamsettings/Teamsettings';
import TeamWebsites from './TeamWebsites/TeamWebsites';
import TeamHistory from './TeamHistory/TeamHistory';
import TeamDelete from './TeamDelete/TeamDelete';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Teams extends React.Component {
    render(){
        return (
            <div className="Teams">
                   <section className="Teams-section">
                       <a><i class="fa fa-user fa-3x"></i></a>
                       <div className="header-content">
                          <p className="p1">Bitbox Team</p>
                           <p className="p2">Jacob Coleman</p>
                       </div>
                   </section>

                   <div>
                      <Router>
                         <TeamsNav />
                           <Switch>
                             <Route path="/teamsettings" component={Teamsettings}/>
                             <Route path="/teamwebsites" component={TeamWebsites}/>
                             <Route path="/teamhistory" component={TeamHistory}/>
                             <Route path="/teamdelete" component={TeamDelete}/>
                          </Switch>
                       </Router>
                   </div>
            </div>
        );
    }
}
export default Teams;