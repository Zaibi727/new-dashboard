import React, {useState} from 'react';
import Modal from 'react-modal';
import './Security.css';

function Security () {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpeen, setModalIsOpenTwo] = useState(false);
    const [modalIsOpeeen, setModalIsOpenThree] = useState(false);
        return(
            <div className="security-wrapper">
                <section className="security-section-one">
                    <div className="security-section-one-div-one">
                        <h3>
                            Two-factor authentication
                        </h3>
                        <p>
                            We'll ask for a code if we notice an attempted login from an unrecognized device or browser.
                        </p>
                    </div>
                    {/*--section-one-div-one--*/}
                    <div className="security-section-one-commone-div-wrapper">
                         <div className="security-section-one-commone-div-child">
                            <a><i class="fa fa-envelope fa-2x"></i></a>
                            <div className="security-section-one-commone-div-sub-child">
                                <h3>Text Message (SMS)<span className="security-green-on">ON</span></h3>
                                <p>Use text message (SMS) to recieve verification codes. For your protection,phone<br></br> numbers used for two-factor authentication.</p>
                            </div>
                         </div>
                          <button className="security-edit-btn">
                              <a>Edit</a>
                          </button>
                    </div>
                    <div  className="security-section-one-commone-div-wrapper">
                         <div className="security-section-one-commone-div-child">
                              <a><i class="fa fa-lock fa-2x"></i></a>
                              <div className="security-section-one-commone-div-sub-child">
                                 <h3>Authentication App</h3>
                                 <p>Recommended. Use an app like Google Authenticator or Duo Mobile to generate<br></br> Verfication codes for more protection.</p>
                              </div>
                             
                         </div>
                          <button className="security-edit-btn" onClick={()=> setModalIsOpen(true)}>
                                Edit
                          </button>

                          {/*below-about modal for authentication App--*/}
                          <Modal className="modal-app-autentication-section-wrapper" isOpen={modalIsOpen}>
                          <section className="modal-app-autentication-section">
                             <div className="modal-app-autentication-section-div-one">
                                 <h3>Link the app to your Webscalable account</h3>
                                 <p>
                                     Please use the authentication app (such as Duo or Google Authentication)
                                 </p>
                             </div>
                             <div className="modal-app-autentication-section-div-two">
                             <i class="fa fa-qrcode fa-5x"></i>
                             <h6>
                                 Can't scan QR code?
                             </h6>
                             </div>
                             <div className="modal-app-autentication-section-div-three">
                                   <button onClick={()=> setModalIsOpenTwo(true)}>
                                     Next
                                  </button>
                             </div>
                             
                          </section>
                     </Modal>
                     {/*--below about can't scan--*/}
                     <Modal className="modal-app-autentication-section-wrapper" isOpen={modalIsOpeen}>
                          <section className="modal-app-autentication-section-cant-scan">
                             <div className="modal-app-autentication-section-cant-scan-div-one">
                                 <h2>Can't sacn QR code?</h2>
                                 <p>
                                     If you can't scan the QR code with your camera, enter the following code into the authentication app to link it your Webscalable account.
                                 </p>
                             </div>
                             <div className="modal-app-autentication-section-cant-scan-div-two">
                             <h3>
                                 57JJLBG 2XZU KSIN
                             </h3>
                             <p>Try to scan the QR code again</p>
                             </div>
                             <div className="modal-app-autentication-section-div-three">
                                   <button onClick={()=> setModalIsOpenThree(true)}>
                                     Next
                                  </button>
                             </div>
                             
                          </section>
                     </Modal>
                     {/*--below about try authentication code for app authenticantion--*/}
                     <Modal className="modal-app-autentication-section-wrapper" isOpen={modalIsOpeeen}>
                          <section className="modal-app-autentication-section-code-now">
                             <div className="modal-app-autentication-section-code-now-div-one">
                                 <h2>Try the authentication code now</h2>
                                 <p>
                                     From the authentication app, get a code and enter it below to complete the verification process.<br></br>
                                     If you don't have an authentication app on your device, you'll need to install one now.
                                 </p>
                             </div>
                             <div className="modal-app-autentication-section-code-now-div-two">
                             <h3>
                                 Enter Confirmation Code
                             </h3>
                             <p>Please enter the confirmation code you see on your authentication app</p>
                             </div>
                             <div  className="modal-app-autentication-section-code-now-div-three">
                                 <input for="code" required/>
                                 <input for="code" required/>
                                 <input for="code" required/>
                                 <input for="code" required/>
                                 <input for="code" required/>
                                 <input for="code" required/>
                             </div>
                             <div className="modal-app-autentication-section-div-three">
                                   <button   onClick={()=> setModalIsOpenThree(true)}>Verify </button>
                                   
                             </div>
                             
                          </section>
                     </Modal>
                    </div>
                </section>
                      
                      {/*--section-one-with common divs and button--*/}

                      <section className="History">
                    <div className="History-heading">
                        <h3>Audit Log</h3>
                        <p>In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.</p>
                    </div>
                    <section className="audit-log-table-wrapper">
                        <table className="audit-log-table">
                            <tr>
                                <th>
                                    Action
                                   
                                </th>
                                <th>
                                    Ip Address
                                   
                                </th>
                               
                                <th>
                                     Time & Date
                                    
                                </th>
                            </tr>
                             <tr>
                                 <td>User.Confirm_Email</td>
                                 <td>39.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>Payment_Method.Add</td>
                                 <td>39.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>SSH_Key.Add</td>
                                 <td>39.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>Dropplet.Create</td>
                                 <td>39.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>User.Failed_Login</td>
                                 <td>39.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>Image.Approve_Transfer</td>
                                 <td>31.47.0.20</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>User.Request_Change_Email</td>
                                 <td>36.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>User.Confirm_Email</td>
                                 <td>79.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>User.Confirm_Email</td>
                                 <td>89.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>User.Confirm_Email</td>
                                 <td>99.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>User.Confirm_Email</td>
                                 <td>09.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>User.Confirm_Email</td>
                                 <td>49.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td>User.Confirm_Email</td>
                                 <td>39.47.0.255</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                        </table>
                    </section>
                </section>
            </div>
        );
    }
export default Security;