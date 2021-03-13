import React from 'react';
import './CreateNewCredentials.css';

class CreateNewCredentials extends React.Component{
    render(){
        return(
            <div className="CreateNewCredentials-wrapper">
                <section className="createnewcredentials-section-one">
                    <div className="createnewcredentials-section-one-div-one">
                        <h3>Choose a name</h3>
                        <p>In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.</p>
                    </div>
                    <form className="createnewcredentials-section-one-form">
                        <div className="createnewcredentials-section-one-form-div-one">
                            <label for="dname">Domain name</label><br></br>
                            <input id="dname" name="dname" placeholder="Type your domain name here...."/><span className="input-icon"><a><i class="fa fa-check-circle"></i></a></span>
                        </div>
                        <div className="createnewcredentials-section-one-form-div-two">
                            <label for="fwork">Framework</label><br></br>
                            <input id="fwork" name="fwork" placeholder="Wordpress"/><span className="input-icon"><a><i class="fa fa-angle-down"></i></a></span>
                        </div>
                    </form>
                </section>

                {/*--section-one--*/}
                
               <section className="Upgrade-wrapper">
                   <div className="Upgrade-div-one">
                       <h3>Upgrade Plane</h3>
                       <p>
                       Also note that if you change the font-size or color of the icon's container, the icon changes.
                       </p>
                   </div>
                   <div className="Upgrade-div-two">
                       <div className="Upgrade-div-two-left">
                           <p className="upgrade-plane-heading">Planning to stack around for a while</p>
                           <p className="upgrade-plane-paragraph">Get two months free with annual biling.</p>
                       </div>
                       <div className="Upgrade-div-two-right">
                           <p className="monthly-biling">Monthly biling</p>
                           <label id="toggle-button" className="switch">
                               <input type="checkbox"/>
                               <span className="slider round"></span>
                           </label>
                           <p className="annual-biling">Annual biling</p>
                       </div>
                   </div>

                   {/*--upgrade plane haeading and toogle button both dic compelet--*/}

                  <section className="billing-category">
                      <div id="billing-category-box-gray" className="billing-category-box">
                          <h3 className="offer-name">Starter</h3>
                          <p>$80.99 / month<br></br><span id="offer-amount"  className="offer-amount">Billed monthly</span></p>
                          <p id="offer-detial" className="offer-detial">
                          In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the differen
                          </p>
                          <button className="billing-category-box-btn">Get started</button>
                      </div>
                      <div className="billing-category-box">
                          <h3 className="offer-name">Professional</h3>
                          <p>$80.99 / month<br></br><span className="offer-amount">Billed monthly</span></p>
                          <p className="offer-detial">
                          In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the differen
                          </p>
                          <button className="billing-category-box-btn">Get started</button>
                      </div>
                      <div className="billing-category-box">
                          <h3 className="offer-name">Pro</h3>
                          <p>$80.99 / month<br></br><span className="offer-amount">Billed monthly</span></p>
                          <p className="offer-detial">
                          In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the differen
                          </p>
                          <button className="billing-category-box-btn">Get started</button>
                      </div>
                      <div className="billing-category-box">
                          <h3 className="offer-name">Enterprise</h3>
                          <p>$80.99 / month<br></br><span className="offer-amount">Billed monthly</span></p>
                          <p className="offer-detial">
                          In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the differen
                          </p>
                          <button className="billing-category-box-btn">Get started</button>
                      </div>
                  </section>

                     {/*--billing-category-box--*/}
               </section>
                     {/*--create new credentials with coomon upgrade css style of side bar websites nav link--*/}
                 <section className="create-new-credentials-section-bottom">
                     <div className="create-new-credentials-section-bottom-div-one">
                         <h3>Choose region</h3>
                         <p>In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page</p>
                     </div>
                     <div className="create-new-credentials-section-bottom-div-two">
                         <div className="choosen-region">
                             <div className="choosen-region-div-one">
                                 <img src="/images/pak-flag.png"/>
                                 <div className="choosen-region-inner-div">
                                     <p className="country-name">Pakistan</p>
                                     <p className="contient-name">ASIA</p>
                                 </div>
                             </div>
                             <a className="choosen-region-checkup"><i class="fa fa-check-circle"></i></a>
                         </div>
                         <div className="choosen-region">
                             <div className="choosen-region-div-one">
                                 <img src="/images/UK_flag.png"/>
                                 <div className="choosen-region-inner-div">
                                     <p className="country-name">Pakistan</p>
                                     <p className="contient-name">ASIA</p>
                                 </div>
                             </div>
                         </div>
                        <div className="choosen-region">
                             <div className="choosen-region-div-one">
                                 <img src="/images/spain-flag.png"/>
                                 <div className="choosen-region-inner-div">
                                     <p className="country-name">Pakistan</p>
                                     <p className="contient-name">ASIA</p>
                                 </div>
                             </div>
                         </div>
                         <div className="choosen-region">
                             <div className="choosen-region-div-one">
                                 <img src="/images/canada-flag.png"/>
                                 <div className="choosen-region-inner-div">
                                     <p className="country-name">Pakistan</p>
                                     <p className="contient-name">ASIA</p>
                                 </div>
                             </div>
                         </div>
                         <div className="choosen-region">
                             <div className="choosen-region-div-one">
                                 <img src="/images/itlay-flag.svg"/>
                                 <div className="choosen-region-inner-div">
                                     <p className="country-name">Pakistan</p>
                                     <p className="contient-name">ASIA</p>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </section> 
                 <div className="create-new-btn-div">
                    <button className="create-new-next-btn">
                        <a href="/createnewbilling">Next</a>
                    </button>
                 </div>   
            </div>
        );
    }
}
export default CreateNewCredentials;