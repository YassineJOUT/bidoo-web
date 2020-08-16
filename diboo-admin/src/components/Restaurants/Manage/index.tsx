import React, { useState } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import { MDBDataTable } from "mdbreact";
import Card from "../../Shared/Card";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {  GET_RESTAURANTS_MUTATION, DELETE_RESTAURANT_MUTATION, EDIT_RESTAURANT_STATUS_MUTATION } from "../../../helpers/gql";
import ModalForm from "../../Shared/Modal/ModalForm";


const dataRows = {
  columns: [
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 270
    },
    {
      label: "Phone",
      field: "phone",
      sort: "asc",
      width: 200
    },
    {
      label: "City",
      field: "city",
      sort: "asc",
      width: 150
    }
    ,
    {
      label: "Status",
      field: "status",
      sort: "asc",
      width: 100
    }
    ,
    {
      label: "Options",
      field: "options",
      sort: "asc",
      width: 100
    }
    ,
    {
      label: "Action",
      field: "action",
      sort: "asc",
      width: 100
    }
  ]}


function ManageRestaurantsContainer()  {
  const [restaurantId,setRestaurantId] = useState(" ");
  const { loading, error, data } = useQuery(GET_RESTAURANTS_MUTATION);
  const [preview, setPreview] = useState<any>(null);
  const [choice,setChoice] = useState(0);
  const [status,setStatus] = useState(false);
  const handleDeleteCase= (
    id: String
     ) => {
    deleteRestaurantMutation({ variables: id }).finally(() => {
      setPreview(null);
    });
  };
const [
deleteRestaurantMutation
] = useMutation(DELETE_RESTAURANT_MUTATION);
const [editStatusMutation] = useMutation(EDIT_RESTAURANT_STATUS_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.createOrEditCarousel;
    },
    onError: (err) => {
      console.log(err)
    },
  });
  let numberOfRestaurants = 0;
  const handleActiveChange  = (id: string, val: boolean) => {  
        editStatusMutation({
        variables: {
          id,
          status: val,
        },
      });  
    };
  let rows = null;
  let statusActive = 0;
  let statusInactive = 0;
  if (data && data.getRestaurants) {
    numberOfRestaurants= data.getRestaurants.data.length;
    rows = data.getRestaurants.data.map((val: any,index: number) => {
      if(val.status==true) statusActive ++;
      else statusInactive ++;
    return {
        ...val,
        status: [
          <div
          key={index}
          className="btn-group btn-group-toggle mt-2 mt-xl-0"
          data-toggle="buttons"
        >
          <label
            className={
              val.status
                ? "btn btn-outline-primary btn-sm btn-rounded active"
                : "btn btn-outline-primary btn-sm btn-rounded "
            }
            onClick={() => handleActiveChange(val.id, true)}
          >
            <input type="radio" name="options" id="option1" /> active
          </label>
          <label
            className={
              val.status
                ? "btn btn-outline-danger btn-sm btn-rounded"
                : "btn btn-outline-danger btn-sm btn-rounded active"
            }
            onClick={() => handleActiveChange(val.id, false)}
          >
            <input type="radio" name="options" id="option2" />
            inactive
          </label>
        </div>,
          "",
        ],
        options: [
          <span key={index}>
          <ModalForm Id={val.id} title="Details"/>|
          <ModalForm Id={val.id} title="Invoice"/>|
          <ModalForm Id={val.id} title="Preview"/>
          </span>
        ],
        action: [ 
          <span key={index}>
          <ModalForm Id={val.id} title="Edit"/>
          <span
            className="mr-3 text-danger"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Delete"
            onClick={() => {
              setRestaurantId(val.id)
              handleDeleteCase(val.id);
            }}
            style={{cursor: "pointer"}}
          >
            <i className="mdi mdi-close font-18"></i>
          </span>
        </span>,
        "",
        ],
      };
    });
  }

    return (
    <div>
        <div className="page-title-box">
          <div className="row align-items-center">
            <Title title="Manage Restaurants">
              <BreadCrumb title={"Manage Restaurants"} url="/home" />
            </Title>
          </div>
        </div>
        <div className="row">
          <Card
            title="TOTAL RESTAURANTS"
            icon="ion ion-ios-restaurant"
            value={numberOfRestaurants}
            col={4}
          />
          <Card
            title="ACTIVE RESTAURANTS"
            icon="ion ion-ios-restaurant"
            value={statusActive}
            col={4}
            iconColor="success"
          />
          <Card
            title="INACTIVE RESTAURANTS"
            icon="ion ion-ios-restaurant"
            value={statusInactive}
            col={4}
            iconColor="danger"
          />
        </div>
     <div className="row">
       <div className="col-lg-12">
         <div className="card mini-stat ">
           <div className="card-body mini-stat-img">
             <h4 className="mt-0 header-title">Restaurants</h4>

             {rows && (
               <MDBDataTable striped bordered data={{ ...dataRows, rows }} />
             )}
             {loading && (
               <div className="d-flex justify-content-center">
                 <div className="spinner-border "></div>
               </div>
             )}
             {error &&  <div className="d-flex justify-content-center alert alert-danger" role="alert">  Something went wrong </div>}
           </div> 
         </div>
       </div>
     </div> 
     </div>  
   /*  <div>
     <DisplayDetailsForm Id={restaurantId}/>
    */
  );
};

export default ManageRestaurantsContainer;
