import React, { Component } from "react";
import Title from "../Shared/ContentTitle";
import BreadCrumb from "../Shared/BreadCrumb";
import { MDBDataTable } from "mdbreact";
import Form from "./CarouselForm";

const data = {
  columns: [
    {
      label: "#",
      field: "id",
      sort: "asc",
      width: 150,
    },
    {
      label: "Carousel photo",
      field: "photo",
      sort: "asc",
      width: 200,
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
  rows: [
    {
      id: "1",

      photo: (
        <img
          src="http://localhost/eten/assets/uploaded_image/banner/thumbs/1539278712_banner_image.jpg"
          alt="Banner"
          title="Banner Image"
          className="imgborder"
          height="50"
          width="150"
        />
      ),
      date: "2011/04/25",

      status: [
        <div
          className="btn-group btn-group-toggle mt-2 mt-xl-0"
          data-toggle="buttons"
        >
          <label className="btn btn-outline-primary btn-sm btn-rounded  ">
            <input type="radio" name="options" id="option1" /> active
          </label>
          <label className="btn btn-outline-danger btn-sm btn-rounded active">
            <input type="radio" name="options" id="option2" /> inactive
          </label>
        </div>,
        "",
      ],
      action: [
        <span>
          <a
            href="javascript:void(0);"
            className="mr-3 text-primary"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Edit"
          >
            <i className="mdi mdi-pencil font-18"></i>
          </a>
          <a
            href="javascript:void(0);"
            className="mr-3 text-danger"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Delete"
          >
            <i className="mdi mdi-close font-18"></i>
          </a>
        </span>,
        "",
      ],
    },
  ],
};

class CarouselContainer extends Component {
  render = () => {
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
          </div>wa3adya 
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mini-stat ">
              <div className="card-body mini-stat-img">
                <h4 className="mt-0 header-title">Carousel</h4>
                <MDBDataTable striped bordered data={data} />
              </div>
            </div>
          </div>
        </div>
        <Form />
       </div>
    );
  };
}

export default CarouselContainer;
