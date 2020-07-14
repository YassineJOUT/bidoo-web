import React, { useState } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import AddButtom from "../../Shared/AddButton";
import { MDBDataTable, MDBBadge } from "mdbreact";
import Card from "../../Shared/Card";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  DELETE_MENUCATEGORY_MUTATION,
  ADD_OR_EDIT_MENUCATEGORY_MUTATION,
  GET_MENUCATEGORIES_MUTATION,
} from "../../../helpers/gql";
import Form from "./CategoryForm";
import YesNoModal from "../../Shared/ConfirmModal";
import Alert from "../../Shared/Alert";
import { BASE_URL } from "../../../utilities/config";
import moment from "moment";
const dataa = {
  columns: [
    {
      label: "ID",
      field: "badge",
    },
    {
      label: "Category name",
      field: "name",
      sort: "asc",
      width: 270,
    },
    {
      label: "Added by",
      field: "addedBy",
      sort: "asc",
      width: 200,
    },
    {
      label: "Added date",
      field: "date",
      sort: "asc",
      width: 100,
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

const MenuCategoriesContainer: React.FunctionComponent = () => {
  const handleActiveChnage = (id: string, val: boolean) => {
    console.log(id)
    console.log(val)
    addOrEditMutation({
      variables: {
        id,
        status: val,
      },
    });
  };
  const [selectedData, setSelectedData] = useState({
    categoryName: "",
    id: "",
    imagePath: "",
    status: false,
    description: "",
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
    yes && deleteMutation({ variables: { id: categoryId } });
  };
  const [deleteMutation] = useMutation(DELETE_MENUCATEGORY_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.deleteCategory;
      handlAlert(true, ok ? message : error, ok);
    },
  });
  const [addOrEditMutation] = useMutation(ADD_OR_EDIT_MENUCATEGORY_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.createOrUpdateCategory;
      handlAlert(true, ok ? message : error, ok);
    },
    onError: (err) => {
      console.log(err);
      handlAlert(true, "something went wrong!", false);
    },
  });
  const [categoryId, setcategoryId] = useState("");
  const { loading, error, data, refetch } = useQuery(
    GET_MENUCATEGORIES_MUTATION
  );
  let rows = null;
  if (data && data.getCategories) {
    rows = data.getCategories.data.map((val: any, index: number) => {
      return {
        badge: (
          <MDBBadge pill color='primary' className='p-1 px-2' key={index} searchvalue={index}>
            ID: {index + 1}
          </MDBBadge>
        ),
        ...val,
        date: moment(val.createdAt).format("MMMM Do YYYY"),
        name: val.categoryName,
        addedBy: "Rest",
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
                setcategoryId(val.id);
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
          <Title title="Menu Categories">
            <BreadCrumb title={"Menu Categories"} url="/home" />
          </Title>
          <AddButtom text="Add new category" />
        </div>
      </div>
      <div className="row">
        <Card
          title="TOTAL Categrories"
          icon="dripicons-broadcast"
          value={10}
          col={4}
        />
        <Card
          title="Active Categrories"
          icon="ion ion-md-restaurant"
          value={10}
          col={4}
        />
        <Card
          title="Inactive Categrories"
          icon="fas fa-dollar-sign"
          value={330}
          col={4}
        />
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card mini-stat ">
            <div className="card-body mini-stat-img">
              <h4 className="mt-0 header-title">Category List</h4>
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
        addOrEditCategory={addOrEditMutation}
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

export default MenuCategoriesContainer;
