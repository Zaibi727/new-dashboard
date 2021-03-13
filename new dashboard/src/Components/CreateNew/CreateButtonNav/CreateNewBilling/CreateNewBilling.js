import React from 'react';
import './CreateNewBilling.css';

class CreateNewBilling extends React.Component{
    render(){
        return(
            <div className="create-new-billing-wrapper">
                <section className="create-new-billing-section-one">
                    <div className="create-new-billing-div-one">
                        <h3>Payment Method</h3>
                        <p>
                        In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. 
                        </p>
                    </div>
                    <div className="create-new-billing-div-two">
                        <div id="paypal-box" className="create-new-billing-payment-method-box">
                            <i id="paypal" class="fa fa-paypal fa-3x"></i>
                            <h3 id="paypal">PayPal</h3>
                            <button id="paypal-btn">
                             <a>Connect</a>
                            </button>
                        </div>
                        <div className="create-new-billing-payment-method-box">
                        <i class="fa fa-cc-mastercard fa-3x"></i>
                            <h3>Credited/Debit card</h3>
                            <button>
                             <a>Connect</a>
                            </button>
                        </div>
                        <div className="create-new-billing-payment-method-box">
                            <i class="fa fa-paypal fa-3x"></i>
                            <h3>PayPal</h3>
                            <button>
                             <a>Connect</a>
                            </button>
                        </div>
                    </div>
                </section>
                <div className="confirmation-bottom-btn">
                      <button className="confirmation-bottom-btn-1">
                          <a>Back</a>
                      </button>
                      <button>
                          <a>Next</a>
                      </button>
                  </div>
            </div>
        );
    }
}
export default CreateNewBilling;