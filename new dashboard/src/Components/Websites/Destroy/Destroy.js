import React, {useState} from 'react';
import Modal from 'react-modal';
import './Destroy.css';



function Destroy () {
    const [modalIsOpen, setModalIsOpen] = useState(false);
        return(
            <div className="Destroy-wrapper">
            <section className="Destroy">
                <div className="destroy-div-one">
                  <img className="destroy-div-one-img" src="/images/trash-alt-regular.svg"/>
                   <div className="destroy-heading-div">
                       <h3>Delet this site</h3>
                       <p>
                       In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the different
                       </p>
                   </div>
                </div>
                <div className="destroy-din-two">
                    <button className="destroy-din-two-btn" onClick={()=>setModalIsOpen(true)}>
                        <a>Delete</a>
                    </button>
                </div>
            </section>
            <Modal className="modal-team-delete" isOpen={modalIsOpen}>
            <section className="modal-team-delete-section">
                <div className="modal-team-delete-section-div-one">
                  <i class="fa fa-trash fa-3x"></i>
                  <h3>Delete team?</h3>
                <p>Are you sure you want to delete this team?<br></br>You can't undo this action.</p>
               </div>
               <div className="modal-team-delete-section-div-one">
                  <button className="modal-team-delete-section-div-one-btn-1" onClick={()=>setModalIsOpen(false)}>Cancel</button>
                  <button className="modal-team-delete-section-div-one-btn-2">Delete</button>
               </div>
            </section>
            </Modal>
            </div>
        );
}
export default Destroy;