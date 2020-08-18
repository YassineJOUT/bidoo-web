import React, { Component, useState } from "react";
import Title from "../Shared/ContentTitle";
import BreadCrumb from "../Shared/BreadCrumb";
import { MDBDataTable, MDBBadge } from "mdbreact";
import Form from "./CarouselForm";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_CAROUSELS_MUTATION,
  DELETE_CAROUSEL_MUTATION,
  ADD_OR_EDIT_CAROUSEL_MUTATION,
} from "../../helpers/gql";
import YesNoModal from "../Shared/ConfirmModal";
import Alert from "../Shared/Alert";
import { BASE_URL } from "../../utilities/config";

const dataa = {
  columns: [
    {
      label: 'ID',
      field: 'badge',
    },
    {
      label: "Carousel photo",
      field: "photo",
      sort: "asc",
      width: 200,
    },

    {
      label: "title",
      field: "title",
      sort: "asc",
    },
    {
      label: "subtitle",
      field: "subtitle",
      sort: "asc",
    },
    {
      label: "bannerLink",
      field: "bannerLink",
      sort: "asc",
    },

    {
      label: "Status",
      field: "status",
      sort: "asc",
      width: 100,
    },
    {
      label: "Action",
      field: "action",
      sort: "asc",
      width: 100,
    },
  ],
};

const CarouselContainer: React.FunctionComponent = () => {
  const handleActiveChnage = (id: string, val: boolean) => {
    addOrEditMutation({
      variables: {
        id,
        status: val,
      },
    });
  };
  const [selectedData, setSelectedData] = useState({
    bannerLink: "",
    id: "",
    imagePath: "",
    status: false,
    subtitle: "",
    title: "",
  });
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    type: true,
  });
  const handlAlert = (show: boolean, message: string, type: boolean) => {
    setShowAlert({ show, message, type });
    setTimeout(() => {
      setShowAlert({ show: false, message: "", type: true });
    }, 2000);
    refetch();
  };
  const handleClose = (yes: boolean) => {
    setOpen(false);
    // call delete mutation
    yes && deleteMutation({ variables: { id: carouselId } });
  };
  const [deleteMutation] = useMutation(DELETE_CAROUSEL_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.deleteCarousel;
      handlAlert(true, ok ? message : error, ok);
    },
    onError: (err) => {
      handlAlert(true, "Something went wrong!", false);
    }
  });
  const [addOrEditMutation] = useMutation(ADD_OR_EDIT_CAROUSEL_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.createOrEditCarousel;
      handlAlert(true, ok ? message : error, ok);
    },
    onError: (err) => {
      console.log(err)
      handlAlert(true, "something went wrong!", false);
    },
  });
  const [carouselId, setCarouselId] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_CAROUSELS_MUTATION);

  let rows = null;
  if (data && data.getCarousels) {
    rows = data.getCarousels.data.map((val: any, index: number) => {
      return {
        badge: (
          <MDBBadge pill color='primary' className='p-1 px-2' key={index} searchvalue={index}>
            ID: {index + 1}
          </MDBBadge>
        ),
        ...val,
        photo: val.imagePath ? (
          <div className="d-flex justify-content-center">
            <img
              key={index}
              src={BASE_URL + val.imagePath}
              alt="Banner"
              title="Banner Image"
              className="imgborder"
              height="50"
              width="150"
            />
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <div className=""> No Image</div>
          </div>
        ),
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
              onClick={() => handleActiveChnage(val.id, true)}
            >
              <input type="radio" name="options" id="option1" /> active
            </label>
            <label
              className={
                val.status
                  ? "btn btn-outline-danger btn-sm btn-rounded"
                  : "btn btn-outline-danger btn-sm btn-rounded active"
              }
              onClick={() => handleActiveChnage(val.id, false)}
            >
              <input type="radio" name="options" id="option2" />
              inactive
            </label>
          </div>,
          "",
        ],
        action: [
          <span key={index}>
            <span
              className="mr-3 text-primary"
              data-toggle="modal"
              data-target=".bs-caroussel-modal"
              title=""
              data-original-title="Edit"
              onClick={() => {
                //send all data to the compoment
                setSelectedData(val);
              }}
            >
              <i className="mdi mdi-pencil font-18"></i>
            </span>
            <span
              className="mr-3 text-danger"
              data-placement="top"
              title=""
              data-original-title="Delete"
              onClick={() => {
                handleClickOpen();
                setCarouselId(val.id);
              }}
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
        <div className="row">
          <Title title="Website carousel">
            <BreadCrumb title={"Website carousel"} url="/home" />
          </Title>
          <div className="col-sm-6">
            <div className="float-right d-none d-md-block">
              <button
                type="button"
                className="btn btn-primary  waves-effect waves-light"
                data-toggle="modal"
                data-target=".bs-caroussel-modal"
              >
                <i className="fas fa-plus mr-2"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card mini-stat ">
            <div className="card-body mini-stat-img">
              <h4 className="mt-0 header-title">Carousel</h4>

              {rows && (
                <MDBDataTable
                theadColor="black"
                noBottomColumns
                  hover
                  exportToCSV
                  bordered
                  data={{ ...dataa, rows }}
                />
              )}
              {loading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border "></div>
                </div>
              )}
              {error && (
                <div
                  className="d-flex justify-content-center alert alert-danger"
                  role="alert"
                >
                  Something went wrong
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Form
        values={selectedData}
        addOrEditCarousel={addOrEditMutation}
      />
      {showAlert.show && (
        <Alert message={showAlert.message} type={showAlert.type} />
      )}
      <YesNoModal
        message="Are you sure ?"
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default CarouselContainer;
