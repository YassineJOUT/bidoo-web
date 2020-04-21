import React, { Component } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
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
      label: "Restaurant",
      field: "restaurant",
      sort: "asc",
      width: 200
    },
    {
      label: "Price",
      field: "price",
      sort: "asc",
      width: 100
    },
    {
      label: "Payment method",
      field: "paymethod",
      sort: "asc",
      width: 150
    },
    {
      label: "Order date",
      field: "date",
      sort: "asc",
      width: 100
    },
    {
      label: "Transaction Id",
      field: "transaction",
      sort: "asc",
      width: 100
    },
    {
      label: "Invoice",
      field: "invoice",
      sort: "asc",
      width: 100
    }
  ],
  rows: [
    {
      id: "1",
      name: "Name",
      restaurant: "Rest Name",
      price: "461",
      paymethod: "Credit Card",
      date: "2011/04/25",
      transaction: "ORD1234",
      invoice: [
        <a
          href="javascript:void(0);"
          className="text-success"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Invoice"
        >
          <i className="far fa-file-pdf font-18"></i>
        </a>,
        ""
      ]
    },
    {
      id: "2",
      name: "Name",
      restaurant: "Rest Name",
      price: "461",
      paymethod: "Credit Card",
      date: "2011/04/25",
      transaction: "ORD1234",
      invoice: [
        <a
          href="javascript:void(0);"
          className="text-success"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Invoice"
        >
          <i className="far fa-file-pdf font-18"></i>
        </a>,
        ""
      ]
    },
    {
      id: "3",
      name: "Name",
      restaurant: "Rest Name",
      price: "461",
      paymethod: "Credit Card",
      date: "2011/04/25",
      transaction: "ORD1234",
      invoice: [
        <a
          href="javascript:void(0);"
          className="text-success"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Invoice"
        >
          <i className="far fa-file-pdf font-18"></i>
        </a>,
        ""
      ]
    },
    {
      id: "4",
      name: "Name",
      restaurant: "Rest Name",
      price: "461",
      paymethod: "Credit Card",
      date: "2011/04/25",
      transaction: "ORD1234",
      invoice: [
        <a
          href="javascript:void(0);"
          className="text-success"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Invoice"
        >
          <i className="far fa-file-pdf font-18"></i>
        </a>,
        ""
      ]
    }
  ]
};
class GuestOrdersContainer extends Component {
  render = () => {
    return (
      <div>
        <div className="page-title-box">
          <div className="row">
            <Title title="Guest Orders">
              <BreadCrumb title={"Guest Orders"} url="/home" />
            </Title>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mini-stat ">
              <div className="card-body mini-stat-img">
                <h4 className="mt-0 header-title">Guest Orders List</h4>
                <MDBDataTable striped hover data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default GuestOrdersContainer;
