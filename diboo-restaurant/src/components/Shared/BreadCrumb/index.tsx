import React from "react";

type Props = {
  url: string;
  title: string;
};

const BreadCrumb: React.SFC<Props> = ({ url, title }) => (
  <ol className="breadcrumb">
    <li className="breadcrumb-item">
      <a href={url}>
        <i className="mdi mdi-home-outline"></i>
      </a>
    </li>

    <li className="breadcrumb-item active">{title}</li>
  </ol>
);

export default BreadCrumb;
