import React, { useState } from "react";
interface Props {
  message: string;
  /**
   * ture => succes
   * false => error
   */
  type: boolean;
}
const Alert: React.FunctionComponent<Props> = ({ message, type }) => {
   
  return (
    <div
      className={
        type
          ? "alert alert-success alert-dismissible fade show"
          : "alert alert-danger alert-dismissible fade show"
      }
      role="alert"
      style={{
        position: "fixed",
        bottom: 0,
        right: 20,
        zIndex: 1000,
      }}
    >
      {message}
      <button
        type="button"
        className="close"
        aria-label="Close"
        
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
};

export default Alert;
