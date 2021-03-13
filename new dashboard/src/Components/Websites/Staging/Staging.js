import React from 'react';
import './Staging.css';



class Staging extends React.Component {
    render(){
        return(
            <div className="staging-wrapper">
                <section className="staging">
                    <img className="staging-img" src="/images/staging.png"/>
                    <h3 className="staging-h3">
                        No staging enviorment created yet
                    </h3>
                    <p className="staging-paragrap">
                     In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the different
                    </p>
                    <button className="staging-btn">
                        <a><i class="fa fa-plus-circle"></i>Create New</a>
                    </button>
                </section>
            </div>
        );
    }
}
export default Staging;