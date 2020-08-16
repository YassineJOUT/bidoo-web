import React, { Component, useState } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import AddButtom from "../../Shared/AddButton";
import { MDBDataTable, MDBBadge } from "mdbreact";
import YesNoModal from "../../Shared/ConfirmModal";
import Alert from "../../Shared/Alert";
import Form from "./KitchenForm";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_KITCHENS_MUTATION,
  DELETE_KICHEN_MUTATION,
  ADD_OR_EDIT_KITCHEN_MUTATION,
} from "../../../helpers/gql";
import { BASE_URL } from "../../../utilities/config";
import moment from "moment";

const dataa = {
  columns: [
    {
      label: "ID",
      field: "badge",
    },
    {
      label: "Photo",
      field: "photo",
      sort: "asc",
      width: 200,
    },
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 270,
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
const KitchenContainer: React.FunctionComponent = () => {
  const handleActiveChnage = (
    id: string,
    val: {
      status?: boolean;
      popular?: boolean;
    }
  ) => {
    addOrEditKitchen({
      variables: {
        id,
        ...val,
      },
    });
  };
  //Selected row
  const [selectedData, setSelectedData] = useState({
    id: "",
    imagePath: "",
    status: false,
    popular: false,
    description: "",
    kitchenName: "",
  });
  // confirmation modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (yes: boolean) => {
    setOpen(false);
    // call delete mutation
    yes && deleteMutation({ variables: { id: kitchenId } });
  };
  const [deleteMutation] = useMutation(DELETE_KICHEN_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.deleteKitchen;
      handlAlert(true, ok ? message : error, ok);
    },
    onError: () => handlAlert(true, "Something went wrong!", false),
  });
  // Handle alert componenet
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
  const [addOrEditKitchen] = useMutation(ADD_OR_EDIT_KITCHEN_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.createOrUpdateKitchen;
      handlAlert(true, ok ? message : error, ok);
    },
    onError: (err) => {
      handlAlert(true, "something went wrong!", false);
    },
  });
  // handle up coming data
  const [kitchenId, setKitchenId] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_KITCHENS_MUTATION);

  let rows = null;
  if (data && data.getKitchens) {
    rows = data.getKitchens.data.map((val: any, index: number) => {
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
        name: val.kitchenName,
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
            />{" "}
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <div className=""> No Image</div>
          </div>
        ),
        popular: [
          <div
            className="btn-group btn-group-toggle mt-2 mt-xl-0"
            data-toggle="buttons"
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
                setKitchenId(val.id);
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
          <Title title="Kitchen">
            <BreadCrumb title={"Kitchen"} url="/home" />
          </Title>
          <AddButtom text="Add new kitchen" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card mini-stat ">
            <div className="card-body mini-stat-img">
              <h4 className="mt-0 header-title">Kitchen Management</h4>
              {rows && (
                <MDBDataTable
                  noBottomColumns
                  striped
                  bordered
                  responsive
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
      <Form values={selectedData} addOrEditKitchen={addOrEditKitchen} />
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

export default KitchenContainer;
