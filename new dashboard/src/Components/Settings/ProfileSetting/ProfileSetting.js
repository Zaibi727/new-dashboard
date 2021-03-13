import React from 'react';
import './ProfileSetting.css';

class ProfileSetting extends React.Component{
    render(){
        return(
            <div className="profile-setting-wrapper">
                <section className="profile-setting-section-one">
                   <div className="profile-setting-section-one-div-one">
                       <img className="profile-setting-img" src="/images/user-icon.jpeg"/>
                       <div className="profile-setting-img-detial">
                           <h3>John doe &nbsp;<i class="fa fa-pencil"></i></h3>
                           <p>Joined in 2019</p>
                       </div>
                   </div>

                   <div className="profile-setting-section-one-div-two">
                    <form>
                       <div >
                           <label for="fname">First name</label><br></br>
                           <input className="profile-setting-section-one-div-two-form-input" id="fname" name="firstname" placeholder="Your name" required/>
                       </div>
                       <div>
                           <label for="fname">last name</label><br></br>
                           <input className="profile-setting-section-one-div-two-form-input" id="lname" name="lastname" placeholder="Your name" required/>
                       </div>
                       <div>
                           <label for="fname">Email</label><br></br>
                           <input className="profile-setting-section-one-div-two-form-input" type="text" id="email" name="email" placeholder="www.@xyz.com" required/>
                       </div>
                       <div>
                           <label for="phone">Phone number:</label><br></br>
                           <input className="profile-setting-section-one-div-two-form-input" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="+31 60000000" required/>
                       </div>
                       <div>
                           <label for="fname">City</label><br></br>
                           <input className="profile-setting-section-one-div-two-form-input" type="text" id="city" name="city" required/>
                       </div>
                       <div>
                           <label for="fname">State/Province</label><br></br>
                           <input className="profile-setting-section-one-div-two-form-input" type="text" id="state" name="state" required/>
                       </div>
                       <div>
                           <label for="fname">Country</label><br></br>
                           <input className="profile-setting-section-one-div-two-form-input" type="text" id="country" name="country" required/>
                       </div>
                       <div>
                           <label for="fname">Zip code</label><br></br>
                           <input className="profile-setting-section-one-div-two-form-input" type="text" id="zipcode" required/>
                       </div>
                       <div>
                       <input className="profile-setting-form-one-save-changes" type="submit" value="Save changes" />
                       </div>
                   </form>
                   </div>
                   
                </section>
                <section className="profile-setting-section-two">
                    <div className="profile-setting-section-two-div-one">
                        <h3>Change password</h3>
                        <p>
                        In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. 
                        </p>
                    </div>
                    <div className="profile-setting-section-two-div-two">
                        <form className="profile-setting-from-two">
                            <div className="profile-setting-from-two-div-one">
                                <label for="pwd">Old password</label><br></br>
                                <input className="profile-setting-form-two-inputs" type="password" id="pwd" name="pwd" required/>
                            </div>
                            <div className="new-and-confirm-pwd">
                                  <div>
                                      <label for="pwd">New password</label><br></br>
                                      <input className="profile-setting-form-two-inputs" type="password" id="pwd" name="pwd" required/>
                                 </div>
                                  <div>
                                      <label for="pwd">Confirm password</label><br></br>
                                      <input className="profile-setting-form-two-inputs" type="password" id="pwd" name="pwd" required/>
                                 </div>
                            </div>
                            <div>
                            <input id="update-pwd"  className="profile-setting-form-one-save-changes" type="submit" value="update password" />
                            </div>
                        </form>
                    </div>
                </section>

               {/*--section two compelet with password form--*/}

                <section className="Deactive">
                <div className="Deactive-div-one">
                  <img className="Deactive-div-one-img" src="/images/trash-alt-regular.svg"/>
                   <div className="Deactive-heading-div">
                       <h3>Deactivate account</h3>
                       <p>
                          This will remove your account from all teams and disable your account.
                       </p>
                   </div>
                </div>
                <div className="Deactive-din-two">
                    <button className="Deactive-din-two-btn">
                        <a>Deactivate account</a>
                    </button>
                </div>
            </section>
            </div>
        );
    }
}
export default ProfileSetting;