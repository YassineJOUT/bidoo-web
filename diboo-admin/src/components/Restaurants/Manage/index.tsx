import React, { Component } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import { MDBDataTable } from "mdbreact";
import Card from "../../Shared/Card";

const data = {
  columns: [
    {
      label: "#",
      field: "id",
      sort: "asc",
      width: 150
    },
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
      label: "Actions",
      field: "actions",
      sort: "asc",
      width: 100
    }
  ],
  rows: [
    {
      id: "1",
      name: "System rest",
      city: "Edinburgh",
      phone: "09876545",
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
        ""
      ],
      options: "Details | Invoice | Preview",
       actions: [
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
        ""
      ]
    }
  ]
};

class ManageRestaurantsContainer extends Component {
  render = () => {
    return (
      <div>
        <div className="page-title-box">
          <div className="row align-items-center">
            <Title title="Manage Restaurants">
              <BreadCrumb title={"Manage Restaurants"} url="/home" />
            </Title>

            <div className="col-sm-6">
              <div className="float-right d-none d-md-block">
                <button
                  type="button"
                  className="btn btn-primary  waves-effect waves-light"
                  data-toggle="modal"
                  data-target=".bs-caroussel-modal"
                >
                  <i className="fas fa-plus mr-2"></i> Add new restaurant
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Card
            title="TOTAL RESTAURANTS"
            icon="ion ion-ios-restaurant"
            value={10}
            col={4}
          />
          <Card
            title="ACTIVE RESTAURANTS"
            icon="ion ion-ios-restaurant"
            value={20}
            col={4}
            iconColor="success"
          />
          <Card
            title="INACTIVE RESTAURANTS"
            icon="ion ion-ios-restaurant"
            value={30}
            col={4}
            iconColor="danger"
          />
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card mini-stat ">
              <div className="card-body mini-stat-img">
              <h4 className="mt-0 header-title">Restaurants</h4>
                <MDBDataTable striped hover data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default ManageRestaurantsContainer;
