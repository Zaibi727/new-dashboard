import React from 'react';
import './CreateButtonNav.css';
import {Link} from 'react-router-dom';

class CreateButtonNav extends React.Component{
    render(){
        return(
            <div className="createbuttonnav">
                <ul className="createbuttonnav-ul">
                <Link className="webnav-LINK" to="/createnewcredentials">
                   <li><span className="create-button-nav-number">1</span><a>Credentials</a></li>
                </Link>
                 <Link className="webnav-LINK" to="/createnewbilling">
                   <li><span  className="create-button-nav-number">2</span><a>Billing</a></li>
                 </Link>  
                 <Link className="webnav-LINK" to="/createnewconfirmation">
                   <li><span  className="create-button-nav-number">3</span><a>Confirmation</a></li>
                 </Link>  
                   
                </ul>
            </div>
        );
    }
}
export default CreateButtonNav;