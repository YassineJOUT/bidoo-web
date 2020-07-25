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
      label: "Order",
      field: "order",
      sort: "asc",
      width: 270
    },
    {
      label: "Customer name",
      field: "customer",
      sort: "asc",
      width: 200
    },
    {
      label: "Customer email",
      field: "email",
      sort: "asc",
      width: 100
    },
    {
      label: "Phone",
      field: "phone",
      sort: "asc",
      width: 100
    },
    {
      label: "Restaurant",
      field: "restaurant",
      sort: "asc",
      width: 150
    },
    {
      label: "Payment Method",
      field: "paymethod",
      sort: "asc",
      width: 150
    },
    {
      label: "Total price",
      field: "totalprice",
      sort: "asc",
      width: 100
    },
    {
      label: "Date",
      field: "date",
      sort: "asc",
      width: 100
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
      order: "ORD3242",
      customer: "Customer ",
      email: "customer@gmail.com ",
      phone: "097654567 ",
      restaurant: "Rest 1 ",
      paymethod: "Credit card ",
      totalprice: "433 ",
      date: "2011/04/25",
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
        ""
      ]
    }
  ]
};
class OrderReportsContainer extends Component {
  render = () => {
    return (
      <div>
        <div className="page-title-box">
          <div className="row">
            <Title title="Manage Restaurants">
              <BreadCrumb title={"Manage Restaurants"} url="/home" />
            </Title>
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
            title="TOTAL ORDERS"
            icon="ion ion-ios-restaurant"
            value={10}
            col={4}
          />
          <Card
            title="ACTIVE RESTAURANTS"
            icon="ion ion-ios-restaurant"
            value={20}
            col={2}
            iconColor="success"
          />
          <Card
            title="INACTIVE "
            icon="ion ion-ios-restaurant"
            value={30}
            col={2}
            iconColor="danger"
          />
          
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mini-stat ">
              <div
                id="datatable-buttons_wrapper"
                className="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div className="card-body mini-stat-img">
                <h4 className="mt-0 header-title">Orders Report</h4>
                  <MDBDataTable striped hover data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default OrderReportsContainer;
