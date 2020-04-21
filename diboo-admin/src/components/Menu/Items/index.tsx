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
      label: "Item name",
      field: "item",
      sort: "asc",
      width: 270
    },
    {
      label: "Category name",
      field: "category",
      sort: "asc",
      width: 200
    },
    {
      label: "Item price",
      field: "price",
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
      item: "System Architect",
      category: "System ",
      price: "433 ",
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
class ItemsContainer extends Component {
  render = () => {
    return (
      <div>
        <div className="page-title-box">
          <div className="row">
            <Title title="Category Items">
              <BreadCrumb title={"Category Items"} url="/home" />
            </Title>
            <AddButtom text="Add new item"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mini-stat ">
              <div className="card-body mini-stat-img">
                <h4 className="mt-0 header-title">Items Management</h4>
                <MDBDataTable striped hover data={data} />
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade bs-caroussel-modal tabindex= show" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-modal="true" >
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myExtraLargeModalLabel">Add new carousel Image</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                    
                        <div className="col-lg-6">
                            
                            <h4 className="mt-0 header-title">Item</h4><br/>
                            <label >Category Item Photo</label>
                            <div className="form-group">
                            <div className="bootstrap-filestyle input-group"><span className="group-span-filestyle " ><label className="btn btn-secondary "><span className="icon-span-filestyle fas fa-folder-open"></span> <span className="buttonText">Choose a file</span></label></span></div>
                        </div>
                            <div className="form-group">
                               
                                <br/>
                                <img className="rounded mr-2" alt="200x200" width="150" src="../assets/images/thumbnail-default.jpg" data-holder-rendered="true"/>
                            </div>
                            <div className="form-group">
                                <label >Item Price </label>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label" >
                                                fixed Price
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2"/>
                                            <label className="form-check-label" >
                                                Multi size
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <input id="metakeywords" name="price" type="text" value="10dh" className="form-control"/>
                            </div>

                            <button type="submit" className="btn btn-success mr-1 waves-effect waves-light">Save Changes</button>
            
                        </div>
                        <div className="col-lg-6">
                            <div className="card-body">

                                <div className="form-group">
                                    <label >Item category</label>
                                    <select className="form-control">
                                        <option>Select a category</option>
                                        <option>category 1</option>
                                        <option>category 2</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label >Item name </label>
                                    <input id="metakeywords" name="itemname" type="text" className="form-control"/>
                                </div>
                                 
                                  
                                <div className="form-group">
                                    <label >Description</label>
                                    <textarea className="form-control" id="metadescription" ></textarea>
                                </div>
                                
                                <div className="form-group">
                                    
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                            <label >Instruction</label><br/>
                                            <div className="btn-group btn-group-toggle mt-2 mt-xl-0" data-toggle="buttons">
                                            <label className="btn btn-outline-primary btn-sm btn-rounded  active">
                                              <input type="radio" name="options" id="option1"/>
                                              Yes
                                            </label>
                                            <label className="btn btn-outline-danger  btn-sm btn-rounded ">
                                              <input type="radio" name="options" id="option2" />
                                              No
                                            </label></div>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                            <label >Add-ons</label> <br/>
                                            <div className="btn-group btn-group-toggle mt-2 mt-xl-0" data-toggle="buttons">
                                            <label className="btn btn-outline-primary btn-sm btn-rounded  active">
                                              <input type="radio" name="options" id="option1"/>
                                              Yes
                                            </label>
                                            <label className="btn btn-outline-danger  btn-sm btn-rounded ">
                                              <input type="radio" name="options" id="option2" />
                                              No
                                            </label>
                                          </div>
                                        </div>
                                        </div>
                                    </div> 
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

export default ItemsContainer;
