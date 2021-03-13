import React from 'react';
import './CreateNew.css';
import CreateButtonNav from './CreateButtonNav/CreateButtonNav';
import CreateNewCredentials from '../CreateNew/CreateNewCredentials/CreateNewCredentials';
import CreateNewBilling from '../CreateNew/CreateNewBilling/CreateNewBilling';
import CreateNewConfirmation from '../CreateNew/CreateNewConfirmation/CreateNewConfirmation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class CreateNew extends React.Component {
    render(){
        return (
            <div className="CreateNew">
                   

                   <div>
                      <Router>
                       <CreateButtonNav />
                         <Switch>
                             <Route path="/createnewcredentials" component={CreateNewCredentials} />
                             <Route path="/createnewbilling" component={CreateNewBilling} />
                             <Route path="/createnewconfirmation" component={CreateNewConfirmation} />
                         </Switch>
                       </Router>
                   </div>
            </div>
        );
    }
}
export default CreateNew;