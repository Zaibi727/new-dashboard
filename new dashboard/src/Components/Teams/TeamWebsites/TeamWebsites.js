import React from 'react';
import './TeamWebsites.css';

class TeamWebsites extends React.Component {
    render(){
        return(
            <div className="team-websites-wrapper">
                   <section className="team-websites-section-one">
                     <div className="team-websites-div-top">
                         <h3>Websites</h3>
                         <p>
                         In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.
                         </p>
                     </div>
                       <table className="team-websites-table">
                       <tr>
                            <th>
                                 <div className="arrows-th">
                                 Domain Name
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                            <th>
                                 <div className="arrows-th">
                                 Rgion
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
                                 Owned by
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
                               <td>Netherlands</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="deactive"><i class="fa fa-circle"></i><span>Deactive</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="deactive"><i class="fa fa-circle"></i><span>Deactive</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="deactive"><i class="fa fa-circle"></i><span>Deactive</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="deactive"><i class="fa fa-circle"></i><span>Deactive</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="deactive"><i class="fa fa-circle"></i><span>Deactive</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="deactive"><i class="fa fa-circle"></i><span>Deactive</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="deactive"><i class="fa fa-circle"></i><span>Deactive</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                           <tr>
                               <td className="td"><img  className="team-websites-logo" src="/images/user-icon.jpeg" />Facebook Dummy</td>
                               <td>Netherlands</td>
                               <td className="active"><i class="fa fa-circle"></i><span>Active</span></td>
                               <td>Raees Iqbal's team</td>
                               <td>19 Dec,2020</td>
                               <td className="team-websites-btn"><button><a>Manage</a></button></td>
                           </tr>
                       </table>
                   </section>
            </div>
        );
    }
}

export default TeamWebsites;