import React from 'react';
import './Analytics.css';



class Analytics extends React.Component {
    render(){
        return(
            <div className="Analytics-wrapper">
              <section className="Analytics">
                 <table>
                     <tr>
                         <td className="jan"></td>
                         <p>Jan</p>
                     </tr>
                     <tr>
                         <td className="feb"></td>
                         <p>Feb</p>
                     </tr>
                     <tr>
                         <td className="mar"></td>
                         <p>Mar</p>
                     </tr>
                     <tr>
                         <td className="apr"></td>
                         <p>Apr</p>
                     </tr>
                     <tr>
                         <td className="may"></td>
                         <p>May</p>
                     </tr>
                     <tr>
                         <td className="jun"></td>
                         <p>Jun</p>
                     </tr>
                     <tr>
                         <td className="jul"></td>
                         <p>Jul</p>
                     </tr>
                     <tr>
                         <td className="aug"></td>
                         <p>Aug</p>
                     </tr>
                     <tr>
                         <td className="sep"></td>
                         <p>Sep</p>
                     </tr>
                     <tr>
                         <td className="oct"></td>
                         <p>Oct</p>
                     </tr>
                     <tr>
                         <td className="nov"></td>
                         <p>Nov</p>
                     </tr>
                     <tr>
                         <td className="dec"></td>
                         <p>Dec</p>
                     </tr>
                 </table>
              </section>
            </div>
        );
    }
}

export default Analytics;