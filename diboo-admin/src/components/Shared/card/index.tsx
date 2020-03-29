import React, { ReactNode } from "react";

type Props = {
  title: string;
  value: number;
  icon: string;
};

const Card: React.SFC<Props> = ({ title, value, icon }) => (
  <div className="col-lg-3">
    <div className="card mini-stat bg-pattern">
      <div className="card-body mini-stat-img">
        <div className="mini-stat-icon">
          <i className={icon+" bg-soft-primary text-primary float-right h4"} ></i>
        </div>
        <h6 className="text-uppercase mb-3 mt-0">{title}</h6>
        <h5 className="mb-3">{value}</h5>
      </div>
    </div>
  </div>
);

export default Card;
