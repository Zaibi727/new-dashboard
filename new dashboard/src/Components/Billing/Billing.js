import React,  { useState } from 'react';
import Modal from 'react-modal';
import './Billing.css';

function Billing (){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpeen, setModalIsOpeen] = useState(false)
        return (
            <div className="Billing-wrapper">
                <section className="billing-section-one">
                  <div className="billing-section-one-div-one">
                      <h3>Estimated costs for this biling period</h3>
                      <p>
                          this is the current cost for this biling period.A breakdown of your costs is available below
                      </p>
                  </div>
                  <figure className="billing-section-one-figure">$25</figure>
                </section>
                {/*--section-one--*/}
                <section className="billing-section-two">
                    <div className="billing-section-two-div-one">
                        <h3>
                            Data usage
                        </h3>
                        <p>
                            Usage reset on 1st Apr 2021
                        </p>
                    </div>
                    <div className="billing-section-two-div-two">
                        <meter value="200" min="0" max="1000">200 out 1000</meter>
                        <div class="round">
                              <input type="radio" id="checkbox" />
                              <label for="radio">Total Data: 1000Gb</label>
                              <input className="billing-used" type="radio" id="checkbox" />
                              <label type="radio" id="checked">Used Data: 200Gb</label>
                        </div>
                    </div>
                </section>
                {/*--section-two--*/}
                <section className="billing-section-three">
                    <div className="billing-section-three-div-whole">
                        <h3>Biling alerts</h3>
                        <input for="checkbox" type="checkbox" />
                        <label className="billing-alert-detial" id="checkbox">Send me an email anytime my monthly usuage has exceede the amount.</label>
                        <div className="biling-amount-input">
                            <a className="dollar-sign">$</a><span><input  className="billing-alert-input" type="text"/></span>
                        </div>
                          <input className="billing-alerr-save-btn"  type="submit" value="Save usage limit" />
                    </div>
                </section>
                {/*--secton-three--*/}
                <section className="billing-section-four-five-common">
                    <div className="billing-section-four-five-common-div-one">
                        <h3>Biling address</h3>
                        <p>
                        In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.
                        </p>
                    </div>
                     <div className="billing-section-four-five-common-div-two">
                         <div>
                             <p>Street</p>
                             <h3>RM 1125 CityMaxHotel</h3>
                         </div>
                         <div>
                             <p>House number</p>
                             <h3>202</h3>
                         </div>
                         <div>
                             <p>Zip code</p>
                             <h3>0000 XX</h3>
                         </div>
                         <div>
                             <p>City</p>
                             <h3>Dubai</h3>
                         </div>
                         <div>
                             <p>country</p>
                             <h3>UAE</h3>
                         </div>
                         <div>
                             <p>Phone#</p>
                             <h3>+971-585-55564-01</h3>
                         </div>
                     </div>
                     <button className="edit-billing-address-btn" onClick={()=> setModalIsOpen(true)}>
                         Edit address
                     </button>
                     <Modal className="modal-edit-adress-section-wrapper" isOpen={modalIsOpen}>
                          <section className="modal-edit-adress-section">
                             <div className="modal-edit-adress-section-div-one">
                                 <h3>Edit Address</h3>
                                 <p>
                                     This address appears on your montly invoice and should be the legal address of your home or bussiness.
                                 </p>
                             </div>
                             <form className="modal-edit-adress-section-form">
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">Street</lable><br></br>
                                     <input id="street" name="street" placeholder="Rm 1125 CityMaxHotel" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">Street</lable><br></br>
                                     <input id="street" name="street" placeholder="Rm 1125 CityMaxHotel" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">House number</lable><br></br>
                                     <input id="street" name="street" placeholder="202" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">Zip Code</lable><br></br>
                                     <input id="street" name="street" placeholder="0000 xx" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">City</lable><br></br>
                                     <input id="street" name="street" placeholder="Dubai" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">Country</lable><br></br>
                                     <input id="street" name="street" placeholder="UAE" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">Phone#</lable><br></br>
                                     <input id="street" name="street" placeholder="+971-585-5564-01" required/>
                                 </div>
                                 <div className="modal-edit-adress-update-btn-div">
                                     <input id="pop-up-update-btn" type="submit" value="Update Address" />
                                 </div>
                                 <button className="modal-edit-adress-cancel-btn" onClick={()=> setModalIsOpen(false)}>
                                      <i class="fa fa-times-circle fa-2x"></i>
                                </button>
                             </form>
                          </section>
                     </Modal>
                     {/*--modal of edit adress--*/}
                </section>
                {/*--section-four--*/}
                <section className="billing-section-four-five-common">
                    <div className="billing-section-four-five-common-div-one">
                        <h3>Tax location</h3>
                        <p>
                        In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.
                        </p>
                    </div>
                     <div className="billing-section-four-five-common-div-two">
                         <div>
                             <p>Street</p>
                             <h3>RM 1125 CityMaxHotel</h3>
                         </div>
                         <div>
                             <p>House number</p>
                             <h3>202</h3>
                         </div>
                         <div>
                             <p>Zip code</p>
                             <h3>0000 XX</h3>
                         </div>
                         <div>
                             <p>City</p>
                             <h3>Dubai</h3>
                         </div>
                         <div>
                             <p>country</p>
                             <h3>UAE</h3>
                         </div>
                         <div>
                             <p>Phone#</p>
                             <h3>+971-585-55564-01</h3>
                         </div>
                     </div>
                     <button className="edit-tax-location-btn" onClick={()=> setModalIsOpeen(true)}>
                         Edit tax loaction
                     </button>

                     {/*--below-modal-of tax-location--*/}

                     <Modal className="modal-edit-adress-section-wrapper" isOpen={modalIsOpeen}>
                          <section className="modal-edit-adress-section">
                             <div className="modal-edit-adress-section-div-one">
                                 <h3>TAX Location</h3>
                                 <p>
                                     Your tax location determines thw taxes that are applied to your bill.
                                 </p>
                             </div>
                             <form className="modal-edit-adress-section-form">
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">Street</lable><br></br>
                                     <input id="street" name="street" placeholder="Rm 1125 CityMaxHotel" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">Street</lable><br></br>
                                     <input id="street" name="street" placeholder="Rm 1125 CityMaxHotel" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">House number</lable><br></br>
                                     <input id="street" name="street" placeholder="202" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">Zip Code</lable><br></br>
                                     <input id="street" name="street" placeholder="0000 xx" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">City</lable><br></br>
                                     <input id="street" name="street" placeholder="Dubai" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">Country</lable><br></br>
                                     <input id="street" name="street" placeholder="UAE" required/>
                                 </div>
                                 <div className="modal-edit-adress-section-form-divs">
                                     <lable for="street">Phone#</lable><br></br>
                                     <input id="street" name="street" placeholder="+971-585-5564-01" required/>
                                 </div>
                                 <div className="modal-edit-adress-update-btn-div">
                                 <input id="pop-up-update-btn" type="submit" value="Update TAX" />
                             </div>
                             </form>
                             <button className="modal-edit-adress-cancel-btn" onClick={()=> setModalIsOpeen(false)}>
                             <i class="fa fa-times-circle fa-2x"></i>
                             </button>
                          </section>
                     </Modal>
                </section>
                {/*--section-four-five-common-*/}
                  <section className="billing-section-six">
                      <div className="billing-section-six-div-one">
                          <h3>TAX ID</h3>
                          <p>
                              Registered business can enter their tax identification number t remove tax charges from future bills.
                          </p>
                      </div>
                      <div className="billing-section-six-div-two"> 
                          <label for="tax">TAX ID</label><br></br>
                          <input type="text" id="tax" placeholder="123-45-6789"/><span><a className="tax-id-check-mark"><i class="fa fa-check-circle fa-lg"></i></a></span>
                      </div>
                      <div className="billing-section-six-div-three">
                          <input type="submit" value="Save tax ID"/>
                      </div>
                  </section>
                  {/*--section-six--*/}

                  <section className="credentials-section-two">
                    <div className="credentials-section-two-div-one">
                        <h3>Billing history</h3>
                        <p>In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the different</p>
                    </div>
                    <div className="credentials-section-two-table-two">
                        <table className="file-transfer-credentials-table">
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Invoice no#</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                            {/*--table-heading--*/}
                            <tr>
                                <td>June 01, 2020</td>
                                <td>Payment (Visa 5135)</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>May 01, 2020</td>
                                <td>Invoices for May 2020</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>Apr 01, 2020</td>
                                <td>Payment (Visa 5135)</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>Feb 01, 2020</td>
                                <td>Invoices for May 2020</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>Aug 01, 2020</td>
                                <td>Payment (Visa 5135)</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>June 01, 2020</td>
                                <td>Invoices for May 2020</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>June 01, 2020</td>
                                <td>Payment (Visa 5135)</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>June 01, 2020</td>
                                <td>Invoices for May 2020</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>June 01, 2020</td>
                                <td>Payment (Visa 5135)</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>June 01, 2020</td>
                                <td>Invoices for May 2020</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>June 01, 2020</td>
                                <td>Payment (Visa 5135)</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>June 01, 2020</td>
                                <td>Payment (Visa 5135)</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>Nov 01, 2020</td>
                                <td>Payment (Visa 5135)</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                            <tr>
                                <td>Dec 01, 2020</td>
                                <td>Payment (Visa 5135)</td>
                                <td>AT-8341</td>
                                <td>-$4.43</td>
                                <td><a className="billing-history-pdf" href="#">PDF</a></td>
                            </tr>
                        </table>
                    </div>
                </section>

                {/*--section-seven- its css common with credrntils tables css-*/}

                <section className="team-websites-section-one">
                     <div className="team-websites-div-top">
                         <h3>Subscription history</h3>
                         <p>
                         In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.
                         </p>
                     </div>
                       <table className="team-websites-table">
                           <tr>
                            <th>
                                 <div className="arrows-th">
                                 Site name
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                            <th>
                                 <div className="arrows-th">
                                 Plan
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                            <th>
                                 <div className="arrows-th">
                                 Status
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                            <th>
                                 <div className="arrows-th">
                                 Billing Period
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                            <th>
                                 <div className="arrows-th">
                                 Price
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                            <th>
                                 <div className="arrows-th">
                                 Action
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                           </tr>
                       {/*--table-hading--*/}
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="deactive"><i class="fa fa-circle"></i><span>deactive</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="deactive"><i class="fa fa-circle"></i><span>deactive</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="deactive"><i class="fa fa-circle"></i><span>deactive</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="deactive"><i class="fa fa-circle"></i><span>deactive</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Deactiveted</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Deactiveted</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Annually</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Starter</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Deactiveted</span></td>
                               <td>Montly</td>
                               <td>$80.99</td>
                               <td id="upgrade-plan-btn" className="team-websites-btn"><button><a>Upgrade Plane</a></button></td>
                           </tr>
                       </table>
                   </section>

                   {/*-its css common with team websites table---*/}
            </div>
        );
}
export default Billing;