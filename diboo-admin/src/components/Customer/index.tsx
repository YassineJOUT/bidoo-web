import React, { Component } from "react";
import Title from "../Shared/ContentTitle";
import BreadCrumb from "../Shared/BreadCrumb";
import { MDBDataTable } from "mdbreact";

const data = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc",
        width: 150
      },
      {
        label: "Customer name",
        field: "name",
        sort: "asc",
        width: 270
      },
      {
        label: "Customer email",
        field: "email",
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
        label: "Added date",
        field: "date",
        sort: "asc",
        width: 100
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 150
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100
      }
    ],
    rows: [
      {
        id: "1",
        name: "Customer",
        email: "customer@gmail.com",
        phone: "098347593",
        paymethod: "Credit Card",
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
          ""
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
            <a
              href="javascript:void(0);"
              className="mr-3 text-danger"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Log in"
            >
              <i className="fas fa-lock-open font-18"></i>
            </a>
          </span>,
          ""
        ]
      }
    ]
  };
class CustomersContainer extends Component {
  render = () => {
    return (
      <div>
        <div className="page-title-box">
          <div className="row">
            <Title title="Customers">
              <BreadCrumb title={"Customers"} url="/home" />
            </Title>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mini-stat ">
              <div className="card-body mini-stat-img">
                <h4 className="mt-0 header-title">Customers</h4>
                <MDBDataTable
                noBottomColumns striped hover data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default CustomersContainer;
