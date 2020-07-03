import React, { Component, useState } from "react";
import Title from "../Shared/ContentTitle";
import BreadCrumb from "../Shared/BreadCrumb";
import { MDBDataTable } from "mdbreact";
import Form from "./CarouselForm";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_CAROUSELS_MUTATION,
  DELETE_MUTATION_MUTATION,
} from "../../helpers/gql";
import YesNoModal from "../Shared/ConfirmModal";

const dataa = {
  columns: [
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
const handleActiveChnage = () => {
  console.log("fireeed");
};
const CarouselContainer: React.SFC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (yes: boolean) => {
    setOpen(false);
    // call delete mutation
    yes && deleteMutation({ variables: { id: carouselId } });
    console.log(yes);
  };
  const [deleteMutation, { loading: mutationLoading }] = useMutation(
    DELETE_MUTATION_MUTATION,
    {
      onCompleted: (data) => {  
        console.log(data);
      },
    }
  );

  const [carouselId, setCarouselId] = useState("");
  const { loading, error, data } = useQuery(GET_CAROUSELS_MUTATION);

  let rows = null;
  if (data && data.getCarousels) {
    rows = data.getCarousels.data.map((val: any, index: number) => {
      return {
        ...val,
        photo: val.imagePath ? (
          <div className="d-flex justify-content-center">
            <img
              key={index}
              src={"http://localhost:3005/" + val.imagePath}
              alt="Banner"
              title="Banner Image"
              className="imgborder"
              height="50"
              width="150"
            />{" "}
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
              className="btn btn-outline-primary btn-sm btn-rounded  "
              onClick={handleActiveChnage}
            >
              <input type="radio" name="options" id="option1" /> active
            </label>
            <label className="btn btn-outline-danger btn-sm btn-rounded active">
              <input
                type="radio"
                name="options"
                id="option2"
                onChange={handleActiveChnage}
              />{" "}
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
                setCarouselId(val.id);
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
      <YesNoModal
        message="Are you sure ?"
        open={open}
        handleClose={handleClose}
      />
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
                <MDBDataTable striped bordered data={{ ...dataa, rows }} />
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
                  {" "}
                  Something went wrong{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Form Id={carouselId} />
    </div>
  );
};

export default CarouselContainer;
