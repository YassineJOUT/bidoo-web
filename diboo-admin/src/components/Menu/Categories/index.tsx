import React, { Component } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import AddButtom from "../../Shared/AddButton";
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
      label: "Category name",
      field: "category",
      sort: "asc",
      width: 270
    },
    {
      label: "Added by",
      field: "addedby",
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
      category: "System Architect",
      addedby: "Rest",
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
         
        </span>,
        ""
      ]
    }
  ]
};
class MenuCategoriesContainer extends Component {
  render = () => {
    return (
      <div>
        <div className="page-title-box">
          <div className="row">
            <Title title="Menu Categories">
              <BreadCrumb title={"Menu Categories"} url="/home" />
            </Title>
            <AddButtom text="Add new category"/>
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
                <MDBDataTable striped hover data={data} />
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade bs-caroussel-modal tabindex= show" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-modal="true" >
      <div className="modal-dialog modal-xl" >
          <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title mt-0" id="myExtraLargeModalLabel">Add new category</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
              </div>
              <div className="modal-body">
                  <div className="row">
                  
                      <div className="col-lg-6">
                          
                          <h4 className="mt-0 header-title">Menu Category</h4><br/>
                          <label >Category Photo</label>
                          <div className="form-group">
                          <div className="bootstrap-filestyle input-group"><span className="group-span-filestyle " ><label className="btn btn-secondary "><span className="icon-span-filestyle fas fa-folder-open"></span> <span className="buttonText">Choose a file</span></label></span></div>
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
                                  <label >Restaurant</label>
                                  <select className="form-control">
                                    <option>Select a restaurant</option>
                                    <option>Restaurant 1</option>
                                    <option>Restaurant 2</option>
                                </select>
                              </div>

                              <div className="form-group">
                                  <label >Category name</label>
                                  <input id="metakeywords" name="kictehnnamefr" type="text" className="form-control"/>
                              </div>
                               
                                
                              <div className="form-group">
                                  <label >Category description</label>
                                  <textarea className="form-control" id="metadescription" ></textarea>
                              </div>

                          </div>
                         
                      </div>

                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                            <h4 className="mt-0 header-title">Category items</h4>
                            <p className="text-muted mb-4">
                            </p>
                              <table id="datatable-buttons" className="table  table-bordered dt-responsive nowrap" >
                                <thead className="thead-light">
                                  <tr>
                                    <th className="text-center">#</th>
                                    <th className="text-center">Item name</th>
                                    <th className="text-center">Category name</th>
                                    <th className="text-center">Item price</th>
                                    <th className="text-center">Added date</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Popular</th>
                                    <th className="text-center">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td className="text-center">
                                      Pizza margaritta
                                    </td>
                                    <td className="text-center">
                                      Pizza
                                    </td>
                                    <td className="text-center">
                                      9.00dh
                                    </td>
                                    <td className="text-center">
                                      Oct 8, 2019
                                    </td>
                                    
                                    <td className="text-center">
                                      <div className="btn-group btn-group-toggle mt-2 mt-xl-0" data-toggle="buttons">
                                        <label className="btn btn-outline-primary btn-sm btn-rounded  active">
                                          <input type="radio" name="options" id="option1"/>
                                          active
                                        </label>
                                        <label className="btn btn-outline-danger  btn-sm btn-rounded ">
                                          <input type="radio" name="options" id="option2" />
                                          inactive
                                        </label>
                                      </div>
                                    </td>
                                    <td className="text-center">
                                      <div className="btn-group btn-group-toggle mt-2 mt-xl-0" data-toggle="buttons">
                                        <label className="btn btn-outline-primary btn-sm btn-rounded  active">
                                          <input type="radio" name="options" id="option1"/>
                                          Yes
                                        </label>
                                        <label className="btn btn-outline-danger btn-sm btn-rounded ">
                                          <input type="radio" name="options" id="option2" />
                                          No
                                        </label>
                                      </div>
                                    </td>
                                   
                               
                                      <td className="text-center">
                                        <a className="mr-3 text-primary" data-toggle="modal" data-target=".bs-caroussel-modal"><i className="mdi mdi-pencil font-18" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"></i></a>
                                        <a href="javascript:void(0);" className="text-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
    
                                    </td>
                                
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td className="text-center">
                                      Pizza margaritta
                                    </td>
                                    <td className="text-center">
                                      Pizza
                                    </td>
                                    <td className="text-center">
                                      9.00dh
                                    </td>
                                    <td className="text-center">
                                      Oct 8, 2019
                                    </td>
                                    
                                    <td className="text-center">
                                      <div className="btn-group btn-group-toggle mt-2 mt-xl-0" data-toggle="buttons">
                                        <label className="btn btn-outline-primary btn-sm btn-rounded  active">
                                          <input type="radio" name="options" id="option1"/>
                                          active
                                        </label>
                                        <label className="btn btn-outline-danger btn-sm btn-rounded ">
                                          <input type="radio" name="options" id="option2" />
                                          inactive
                                        </label>
                                      </div>
                                    </td>
                                    <td className="text-center">
                                      <div className="btn-group btn-group-toggle mt-2 mt-xl-0" data-toggle="buttons">
                                        <label className="btn btn-outline-primary btn-sm btn-rounded  active">
                                          <input type="radio" name="options" id="option1"/>
                                          Yes
                                        </label>
                                        <label className="btn btn-outline-danger btn-sm btn-rounded ">
                                          <input type="radio" name="options" id="option2" />
                                          No
                                        </label>
                                      </div>
                                    </td>
                                   
                               
                                      <td className="text-center">
                                        <a className="mr-3 text-primary" data-toggle="modal" data-target=".bs-caroussel-modal"><i className="mdi mdi-pencil font-18" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"></i></a>
                                        <a href="javascript:void(0);" className="text-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
    
                                    </td>
                                
                                  </tr>
                                  
                                </tbody>
                              </table>
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

export default MenuCategoriesContainer;
