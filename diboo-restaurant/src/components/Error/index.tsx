import React from "react";

interface IProps {
  touched?: boolean;
  message?: string;
}

export const Error: React.FunctionComponent<IProps> = ({
  touched,
  message,
}) => {
    let  classname = touched ? "valid-error" : "msg-error";
  if (message) {
    return <div className={classname}>{message}</div>;
  }
  return <div></div>;
};
