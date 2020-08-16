import React, { useState, useEffect } from 'react';
import Modal from '.';
import DisplayDetailsForm from '../../Restaurants/Manage/Forms/DisplayDetails/DisplayDetailsForm';
import EditRestaurantForm from '../../Restaurants/Manage/Forms/Edit/EditRestaurantForm';

const ModalForm: React.SFC<{ Id: string, title:string }> = (props) => {

const [variable,setVariable]=useState({
        modal: false,
        name: "",
        modalInputName: ""
});
const modalOpen=()=> { setVariable({...variable, modal: true});}
const modalClose=()=> { 
    setVariable({...variable, modalInputName: ""});
    setVariable({...variable, modal: false});
}
const display=()=>{
    if(props.title != "Edit") return <b>{props.title}</b>  ;
    else if (props.title == "Edit") return <i className="mdi mdi-pencil font-18"></i> ;
}
const displayContent=()=>{
    if (props.title == "Edit") return <EditRestaurantForm Id={props.Id}/> ;
    if (props.title == "Details") return <DisplayDetailsForm Id={props.Id}/> ;
    if (props.title == "Invoice") return <p>Invoice in the making</p> ;
    if (props.title == "Preview") return <p>Preview in the making</p> ;
}
return (
    <>
    <span
            className="mr-3 text-primary"
            data-toggle="modal"
            data-target=".bs-caroussel-modal"
            title=""
            data-original-title={props.title}
            onClick={() => modalOpen()}
            style={{cursor: "pointer"}}
          >
        {display()}  
          </span> 
    <Modal show={variable.modal} handleClose={modalClose} title={props.title}> 
      {displayContent()}
    </Modal>
  </>
);


}

export default ModalForm;