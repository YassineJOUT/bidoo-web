import React, { Component } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import AddButtom from "../../Shared/AddButton";
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
      label: "Name",
      field: "name",
      sort: "asc",
      width: 270
    },
    {
      label: "Photo",
      field: "photo",
      sort: "asc",
      width: 200
    },
    {
      label: "Date",
      field: "date",
      sort: "asc",
      width: 100
    },
    {
      label: "Popular",
      field: "popular",
      sort: "asc",
      width: 150
    },
    {
      label: "Status",
      field: "status",
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
      name: "System Architect",
      photo: <img src="http://localhost/eten/assets/uploaded_image/banner/thumbs/1539278712_banner_image.jpg" alt="Banner Image" title="Banner Image" className="imgborder" height="50" width="150" />,
      date: "2011/04/25",
      popular: [
        <div
          className="btn-group btn-group-toggle mt-2 mt-xl-0"
          data-toggle="buttons"
        >
          <label className="btn btn-outline-primary btn-sm btn-rounded  ">
            <input type="radio" name="options" id="option1" /> yes
          </label>
          <label className="btn btn-outline-danger btn-sm btn-rounded active">
            <input type="radio" name="options" id="option2" /> no
          </label>
        </div>,
        ""
      ],
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
          
        </span>,
        ""
      ]
    }
  ]
};
class KitchenContainer extends Component {
  render = () => {
    return (
      <div>
        <div className="page-title-box">
          <div className="row">
            <Title title="Kitchen">
              <BreadCrumb title={"Kitchen"} url="/home" />
            </Title>
            <AddButtom text="Add new kitchen"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mini-stat ">
              <div className="card-body mini-stat-img">
                <h4 className="mt-0 header-title">Kitchen Management</h4>
                <MDBDataTable striped hover data={data} />
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade bs-caroussel-modal tabindex= show"  role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-modal="true" >
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myExtraLargeModalLabel">Add new kitchen</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                    
                        <div className="col-lg-6">
                            
                            <h4 className="mt-0 header-title">Cuisine</h4><br/>
                            <label >Cuisine Photo</label>
                            <div className="form-group">
                            <div className="bootstrap-filestyle input-group"><span className="group-span-filestyle " ><label  className="btn btn-secondary "><span className="icon-span-filestyle fas fa-folder-open"></span> <span className="buttonText">Choose a file</span></label></span></div>
                        </div>
                            <div className="form-group">
                               
                                <br/>
                                <img className="rounded mr-2" alt="200x200" width="150" src="../assets/images/thumbnail-default.jpg" data-holder-rendered="true"/>
                            </div>
                            
                            <button type="submit" className="btn btn-success mr-1 waves-effect waves-light">Save Changes</button>
            
                        </div>
                        <div className="col-lg-6">
                            <div className="card-body">

                                <div className="form-group">
                                    <label >Kitchen name</label>
                                    <input id="metakeywords" name="kitchenname" type="text" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label >Kitchen name (fr)</label>
                                    <input id="metakeywords" name="kictehnnamefr" type="text" className="form-control"/>
                                </div>
                                 
                                  
                                <div className="form-group">
                                    <label >Description</label>
                                    <textarea className="form-control" id="metadescription" ></textarea>
                                </div>

                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    );
  };
}

export default KitchenContainer;
