import React from "react";
import Card from "../Shared/Card";
import Title from "../Shared/ContentTitle";
import BreadCrumb from "../Shared/BreadCrumb";

const DashboardContainer: React.FunctionComponent = () => {
  return (
    <>
      <div>
        <div className="page-title-box">
          <div className="row">
            <Title title="Dashboard">
              <BreadCrumb title="Dashboard" url="/dasbhoard" />
            </Title>
          </div>
        </div>
        <div className="row">
          <Card
            title="TOTAL ORDERS"
            icon="dripicons-broadcast"
            value={10}
            col={3}
          />
          <Card title="TOTAL CUSTOMERS" icon="fas fa-user" value={20} col={3} />
          <Card
            title="TOTAL RESTAURANTS"
            icon="ion ion-md-restaurant"
            value={10}
            col={3}
          />
          <Card
            title="TOTAL GAIN"
            icon="fas fa-dollar-sign"
            value={330}
            col={3}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;
