import React from 'react';
import './App.css';
import TopNav from '../TopNav/TopNav';
import SideNav from '../SideNav/SideNav';
import CreateNew from '../CreateNew/CreateNew';
import Websites from '../Websites/Websites';
import Teams from '../Teams/Teams';
import Settings from '../Settings/Settings';
import Billing from '../Billing/Billing';
import HelpSupport from '../HelpSupport/HelpSupport';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <Router>
           <div className="App">
               <TopNav />
               <SideNav />
               <Switch>
                 <Route path="/websites" component={Websites}/>
                 <Route path="/teams" component={Teams}/>
                 <Route path="/settings" component={Settings}/>
                 <Route path="/billing" component={Billing}/>
                 <Route path="/helpsupport" component={HelpSupport}/>
                 <Route path="/createnew" component={CreateNew}/>
               </Switch>
           </div>
      </Router>
     
                
    );
  }
}

export default App;
