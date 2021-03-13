import React from 'react';
import './Teamsettings.css';

class Teamsettings extends React.Component{
    render(){
        return(
            <div className="teamsetting-wrapper">
               <section className="teamsettings-section-one">
                     <div  className="teamsettings-section-one-div-one">
                         <h3>
                             Team details
                         </h3>
                         <p>
                         In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.
                         </p>
                     </div>
                     
                     <form className="teamsettings-section-one-form">
                         <div className="teamsetting-section-one-form-div-one">
                              <label for="tname">Team name</label><br></br>
                              <input type="text" id="fname" name="fname" required/><br></br><br></br>
                         </div>
                         <div className="teamsetting-section-one-form-div-two">
                           <label for="tdescription">Team description</label><br></br>
                           <textarea id="tdescription" name="tdescription" required/>
                         </div>
                         <div className="teamsetting-section-one-form-div-three">
                             <input type="submit" value="Update detial"/>
                         </div>
                     </form>
               </section>

               {/*--table-one-compelet--*/}

               <section className="teamsetting-section-two">
                   <div>
                       <h3>Member</h3>
                       <p>
                       In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.
                       </p>
                   </div>

                   <table className="teamsetting-member-table">
                   <tr>
                            <th>
                                 <div className="arrows-th">
                                 Name
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                            <th>
                                 <div className="arrows-th">
                                 Email
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                            <th>
                                 <div className="arrows-th">
                                 Role
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                            <th>
                                 <div className="arrows-th">
                                 Created on
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                           </tr>
                       <tr>
                             <td className="td"><img className="teamsetting-member-img" src="/images/user-icon.jpeg" />Nayeli</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                       <tr>
                             <td className="td"><img className="teamsetting-member-img" src="/images/user-icon.jpeg" />Nayeli</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                       <tr>
                             <td className="td"><img   className="teamsetting-member-img" src="/images/user-icon.jpeg" />Nayeli</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                       <tr>
                             <td className="td"><img  className="teamsetting-member-img" src="/images/user-icon.jpeg" />Nayeli</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                       <tr>
                             <td className="td"><img  className="teamsetting-member-img" src="/images/user-icon.jpeg" />Nayeli</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                       <tr>
                             <td className="td"><img  className="teamsetting-member-img" src="/images/user-icon.jpeg" />Hjseeli</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                       <tr>
                             <td className="td"><img  className="teamsetting-member-img" src="/images/user-icon.jpeg" />zcyeljg</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                       <tr>
                             <td className="td"><img  className="teamsetting-member-img" src="/images/user-icon.jpeg" />lkyeli</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                       <tr>
                             <td className="td"><img  className="teamsetting-member-img" src="/images/user-icon.jpeg" />Naymki</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                       <tr>
                             <td className="td"><img  className="teamsetting-member-img" src="/images/user-icon.jpeg" />TUyeli</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                       <tr>
                             <td className="td"><img  className="teamsetting-member-img" src="/images/user-icon.jpeg" />Th.dill</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                       <tr>
                             <td className="td"><img  className="teamsetting-member-img" src="/images/user-icon.jpeg" />Carrie Brewer</td>
                             <td>Terry.fox@mail.com</td>
                             <td>Member</td>
                             <td>19 Dec,2020 a 12:18 PM</td>
                             <td><a><i class="fa fa-ellipsis-v"></i></a></td>
                       </tr>
                   </table>

                   <div className="teamsetting-tablebottom-btn">
                       <button>
                           <a><i class="fa fa-plus-circle"></i>Add Members</a>
                        </button>
                   </div>
                  
               </section>
            </div>
        );
    }
}

export default Teamsettings;