import React from 'react';
import './TeamHistory.css';

class TeamHistory extends React.Component{
    render(){
        return(
            <div>
                <section className="Team-History-wrapper">
                    <div className="Team-History-heading">
                        <h3>Activity Log</h3>
                        <p>In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page.</p>
                    </div>
                    <section className="activity-log-table-wrapper">
                        <table className="activity-log-table">
                        <tr>
                            <th>
                                 <div className="arrows-th">
                                 User
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
                                 Action
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                            <th>
                                 <div className="arrows-th">
                                 Time & Date
                                 <div className="arrows-th-a">
                                    <a className="arrows-th-a1"><i class="fa fa-angle-up"></i></a>
                                    <a className="arrows-th-a2"><i class="fa fa-angle-down"></i></a>
                                  </div>
                                </div>
                            </th>
                         {/*--table-heading--*/}
                           </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Emma Fox</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Sheshan Sultan</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Arish Azeem</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Louis Robort</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Louis Wagner</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Carmen Bradly</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Steve Hugs</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Criag Riely</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Marylin Walece</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Jonthan Oliver</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Julie Guerrror</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Doorthy Green</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                             <tr>
                                 <td className="td"><img className="activity-log-user-img" src="/images/user-icon.jpeg" />Marilyn</td>
                                 <td>Terry.fox@mail.com</td>
                                 <td>Lgin attempt for user admin succeeded</td>
                                 <td>19 Dec,2020 a 12:18 PM</td>
                             </tr>
                        </table>
                    </section>
                </section>
            </div>
        );
    }
}
export default TeamHistory;