import React from 'react';
import WebsitesNav from './WebsitesNav/WebsitesNav';
import Upgrade from './Upgrade/Upgrade';
import History from './History/History';
import Analytics from './Analytics/Analytics';
import Staging from './Staging/Staging';
import Destroy from './Destroy/Destroy';
import Credentials from './Credentials/Credentials';
import './Websites.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class Websites extends React.Component {
    render(){
        return (
            <div className="Websites">
                   <section className="Websites-section">
                       <a><i class="fa fa-wordpress fa-3x"></i></a>
                       <div className="header-content">
                          <p className="p1">Wordpress-s-11Vcup-1GB-FRA1-01</p>
                           <p className="p2">YDSG656578900KK</p>
                       </div>
                      
                   </section>
                   
                   <div>
                      <Router>
                         <WebsitesNav />
                           <Switch>
                             <Route path="/upgrade" component={Upgrade}/>
                             <Route path="/history" component={History}/>
                             <Route path="/analytics" component={Analytics}/>
                             <Route path="/Staging" component={Staging}/>
                             <Route path="/destroy" component={Destroy}/>
                             <Route path="/credentials" component={Credentials}/>
                          </Switch>
                       </Router>
                   </div>

            </div>
        );
    }
}
export default Websites;