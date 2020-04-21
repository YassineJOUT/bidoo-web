import React from "react";

type Props = {
  text: string;
};

const AddButton: React.SFC<Props> = ({ text }) => (
  <div className="col-sm-6">
    <div className="float-right d-none d-md-block">
      <button
        type="button"
        className="btn btn-primary  waves-effect waves-light"
        data-toggle="modal"
        data-target=".bs-caroussel-modal"
      >
        <i className="fas fa-plus mr-2"></i> { text }
      </button>
    </div>
  </div>
);

export default AddButton;
