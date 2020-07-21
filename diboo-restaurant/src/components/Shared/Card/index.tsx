import React from "react";

type Props = {
  title: string;
  value: number;
  icon: string;
  iconColor?: string;
  col?: number;
};

const Card: React.SFC<Props> = ({ title, value, icon, iconColor, col }) => {
  let color = "primary";
  if (
    iconColor === "success" ||
    iconColor === "danger" ||
    iconColor !== undefined
  ) {
    color = iconColor;
  }

  return (
    <div className={"col-lg-" + col}>
      <div className="card mini-stat bg-pattern">
        <div className="card-body mini-stat-img">
          <div className="mini-stat-icon">
            <i
              className={
                icon + " bg-soft-primary  float-right h4 text-" + color
              }
            ></i>
          </div>
          <h6 className="text-uppercase mb-3 mt-0">
            {title}
          </h6>
          <h5 className="mb-3">{value}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
