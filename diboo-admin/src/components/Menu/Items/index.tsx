import React, { Component, useState } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import AddButtom from "../../Shared/AddButton";
import { MDBDataTable, MDBBadge } from "mdbreact";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  DELETE_MENUITEM_MUTATION,
  ADD_OR_EDIT_MENUITEM_MUTATION,
  GET_MENUITEMS_MUTATION,
} from "../../../helpers/gql";
import Form from "./ItemForm";
import YesNoModal from "../../Shared/ConfirmModal";
import Alert from "../../Shared/Alert";
import { CategoryInitalValues } from "../Categories";
import Spinner from "../../Shared/Spinner";
import { BASE_URL } from "../../../utilities/config";
import moment from "moment";
import { CategoryProps } from "../Categories/CategoryForm";

const dataa = {
  columns: [
    {
      label: "#",
      field: "badge",
    },
    {
      label: "Item name",
      field: "name",
      sort: "asc",
      width: 270,
    },
    {
      label: "Category name",
      field: "category",
      sort: "asc",
      width: 200,
    },
    {
      label: "Item price",
      field: "price",
      sort: "asc",
      width: 100,
    },
    {
      label: "Date",
      field: "date",
      sort: "asc",
      width: 100,
    },
    {
      label: "Popular",
      field: "popular",
      sort: "asc",
      width: 150,
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
const getCategoryNameOfAnItem = (id: string, data: [CategoryProps]) => {
  return data.filter((item) => item.id === id)[0].categoryName;
};
const ItemsContainer: React.FunctionComponent = () => {
  const handleActiveChnage = (
    id: string,
    val: {
      status?: boolean;
      popular?: boolean;
    }
  ) => {
    addOrEditMutation({
      variables: {
        id,
        ...val,
      },
    });
  };
  const [selectedData, setSelectedData] = useState({
    itemName: "",
    id: "",
    imagePath: "",
    description: "",
    price: 0,
    instruction: false,
    status: false,
    popular: false,
    category: "",
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
    yes && deleteMutation({ variables: { id: itemId } });
  };
  const [deleteMutation] = useMutation(DELETE_MENUITEM_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.deleteItem;
      handlAlert(true, ok ? message : error, ok);
    },
  });
  const [addOrEditMutation] = useMutation(ADD_OR_EDIT_MENUITEM_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.createOrUpdateItem;
      handlAlert(true, ok ? message : error, ok);
    },
    onError: (err) => {
      console.log(err);
      handlAlert(true, "something went wrong!", false);
    },
  });
  const [itemId, setItemId] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_MENUITEMS_MUTATION);
  let rows = null;
  if (data && data.getItems) {
    rows = data.getItems.data.map((val: any, index: number) => {
      return {
        badge: (
          <MDBBadge
            pill
            color="primary"
            className="p-1 px-2"
            key={index}
            searchvalue={index}
          >
            ID: {index + 1}
          </MDBBadge>
        ),
        ...val,
        date: moment(val.createdAt).format("MMMM Do YYYY"),
        name: val.itemName,
        price: val.price,
        category: getCategoryNameOfAnItem(
          val.category,
          data.getCategories.data
        ),
        popular: [
          <div
            className="btn-group btn-group-toggle mt-2 mt-xl-0"
            data-toggle="buttons"
            key={index}
          >
            <label
              className={
                val.popular
                  ? "btn btn-outline-primary btn-sm btn-rounded active"
                  : "btn btn-outline-primary btn-sm btn-rounded "
              }
              onClick={() => {
                handleActiveChnage(val.id, { popular: true });
              }}
            >
              <input type="radio" name="options" id="option1" /> yes
            </label>
            <label
              className={
                val.popular
                  ? "btn btn-outline-danger btn-sm btn-rounded"
                  : "btn btn-outline-danger btn-sm btn-rounded active"
              }
              onClick={() => handleActiveChnage(val.id, { popular: false })}
            >
              <input type="radio" name="options" id="option2" /> no
            </label>
          </div>,
          "",
        ],
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
              onClick={() => {
                handleActiveChnage(val.id, { status: true });
              }}
            >
              <input type="radio" name="options" id="option1" /> active
            </label>
            <label
              className={
                val.status
                  ? "btn btn-outline-danger btn-sm btn-rounded"
                  : "btn btn-outline-danger btn-sm btn-rounded active"
              }
              onClick={() => handleActiveChnage(val.id, { status: false })}
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
                setItemId(val.id);
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
          <Title title="Category Items">
            <BreadCrumb title={"Category Items"} url="/home" />
          </Title>
          <AddButtom text="Add new item" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card mini-stat ">
            <div className="card-body mini-stat-img">
              <h4 className="mt-0 header-title">Items Management</h4>
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
              {loading && <Spinner />}
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
        addOrEditItem={addOrEditMutation}
        categories={data && data.getItems}
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

export default ItemsContainer;
