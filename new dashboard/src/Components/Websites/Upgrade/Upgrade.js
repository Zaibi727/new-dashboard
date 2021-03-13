import React from 'react';
import './Upgrade.css';



class Upgrade extends React.Component {
    render(){
        return(
            <div className="Upgrade">
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
                          <h3 className="offer-name">Starter</h3>
                          <p>$80.99 / month<br></br><span className="offer-amount">Billed monthly</span></p>
                          <p className="offer-detial">
                          In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the differen
                          </p>
                          <button className="billing-category-box-btn">Get started</button>
                      </div>
                      <div className="billing-category-box">
                          <h3 className="offer-name">Starter</h3>
                          <p>$80.99 / month<br></br><span className="offer-amount">Billed monthly</span></p>
                          <p className="offer-detial">
                          In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the differen
                          </p>
                          <button className="billing-category-box-btn">Get started</button>
                      </div>
                      <div className="billing-category-box">
                          <h3 className="offer-name">Starter</h3>
                          <p>$80.99 / month<br></br><span className="offer-amount">Billed monthly</span></p>
                          <p className="offer-detial">
                          In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the differen
                          </p>
                          <button className="billing-category-box-btn">Get started</button>
                      </div>
                  </section>

                     {/*--billing-category-box--*/}
               </section>

               <section className="payment-method">
                      <div className="payment-method-way-header">
                          <h3>Payment Method</h3>
                          <p>
                            In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the differen.
                          </p>
                      </div>
                      <div className="payment-method-way">
                         <div className="payment-method-way-one">
                             <i class="fa fa-paypal fa-3x"></i>
                             <h5>Paypal</h5>
                             <button className="payment-method-way-btn-1" >Connect</button>
                         </div>
                         <div className="payment-method-way-two">
                         <i class="fa fa-cc-mastercard fa-3x"></i>
                            <h5>Paypal</h5>
                            <button className="payment-method-way-btn-2">Connect</button>
                         </div>
                      </div>
                    </section>
            </div>
        );
    }
};
export default Upgrade;