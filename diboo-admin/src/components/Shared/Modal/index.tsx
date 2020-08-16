import React from "react";
interface Props{
    handleClose : Function,
    show: boolean,
    children: any,
    title: string
}
const Modal: React.SFC< Props > = (props) => {
  const showHideClassName = props.show ? "modal d-block" : "modal d-none";

  return (
   /*  <div className={showHideClassName}>
      <div className="modal-container">
        {props.children}
        <a href="javascript:;" className="modal-close" onClick={() => props.handleClose}>
          close
        </a>
      </div>
    </div> */
    <div
    className={showHideClassName}
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-modal="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myExtraLargeModalLabel">
                  {props.title}
                </h5>
                {props.children}
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => props.handleClose()}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Modal;
