import React from 'react';
import './CreateNewConfirmation.css';

class CreateNewConfirmation extends React.Component{
    render(){
        return(
            <div className="CreateNewConfirmation-wrapper">
                <section className="create-new-confirmation-section-one">
                    <div className="create-new-confirmation-section-one-div-one">
                        <h3>Site detial</h3>
                        <p>
                        In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.
                        </p>
                    </div>
                    <div className="create-new-confirmation-section-one-div-two">
                        <div className="site-detial-sub-div">
                            <p>Name</p>
                            <h3>Wordpress-v1</h3>
                        </div>
                        <div className="site-detial-sub-div">
                            <p>Framework</p>
                            <h3>Wordpress</h3>
                        </div>
                        <div className="site-detial-sub-div">
                            <p>Plane</p>
                            <h3>Free</h3>
                        </div>
                        <div className="site-detial-sub-div">
                            <p>Created on</p>
                            <h3>19 Dec,2020</h3>
                        </div>
                        <div className="site-detial-sub-div">
                            <p>Site ID</p>
                            <h3>YDAJD2349865193600</h3>
                        </div>
                        <div className="site-detial-sub-div">
                            <p>Region</p>
                            <h3>NewYork</h3>
                        </div>
                    </div>
                </section>

                {/*--section-one--site-detial--*/}

                <section className="create-new-confirmation-section-two">
                    <div className="create-new-confirmation-section-two-div-one">
                        <h3>Invoice for purchase</h3>
                        <p>
                        In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.
                        </p>
                    </div>
                    <div>
                    <table className="invoice-for-purchase-table">
                        <thead className="invoice-for-purchase-theading">
                          <th>Item</th>
                          <th>Rate</th>
                          <th>Hour</th>
                          <th>Total</th> 
                        </thead>
                        <tbody className="invoice-for-purchase-tbody">
                            <tr>
                                <td>Webscalable Branding</td>
                                <td>$45.00</td>
                                <td>01:50</td>
                                <td>$48.50</td>
                            </tr>
                            <tr>
                                <td>Webscalable Branding</td>
                                <td>$45.00</td>
                                <td>01:50</td>
                                <td>$48.50</td>
                            </tr>
                            <tr>
                                <td>Webscalable Branding</td>
                                <td>$45.00</td>
                                <td>01:50</td>
                                <td>$48.50</td>
                            </tr>
                            <tr>
                                <td>Webscalable Branding</td>
                                <td>$45.00</td>
                                <td>01:50</td>
                                <td>$48.50</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="total-table-div">
                    <table className="total-table">
                        <tr className="total-row">
                            <th>Subtotal</th>
                            <td>$194.00</td>
                        </tr>
                        <tr className="total-row">
                            <th>Tax</th>
                            <td>$0.5</td>
                        </tr>
                        <tr className="total-row">
                            <th className="full-total">Total</th>
                            <td className="full-total">$194.00</td>
                        </tr>
                    </table>
                    </div>
                </section>
                  <div className="confirmation-bottom-btn">
                      <button className="confirmation-bottom-btn-1">
                          <a>Back</a>
                      </button>
                      <button>
                          <a>Finish Purchase</a>
                      </button>
                  </div>
            </div>
        );
    }
}
export default CreateNewConfirmation;