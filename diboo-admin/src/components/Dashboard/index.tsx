import React, { Component } from "react";
import Card from "../Shared/Card";
import Title from "../Shared/ContentTitle";
import Statistics from "./Statistics";
import Overview from "./Overview";
import BreadCrumb from "../Shared/BreadCrumb";

const data = {
  today: {
    label: "Today",
    orders: {
      label: "Today Orders",
      value: 1
    },
    commission: {
      label: "Today Commission",
      value: 1
    },
    delivered: {
      label: "Delivered Orders",
      value: 1
    },
    inPreparation: {
      label: "In preparation",
      value: 1
    }
  },
  week: {
    label: "Week",
    orders: {
      label: "Today Orders",
      value: 2
    },
    commission: {
      label: "Today Commission",
      value: 2
    },
    delivered: {
      label: "Delivered Orders",
      value: 2
    },
    inPreparation: {
      label: "In preparation",
      value: 2
    }
  },
  month: {
    label: "Month",
    orders: {
      label: "Today Orders",
      value: 3
    },
    commission: {
      label: "Today Commission",
      value: 3
    },
    delivered: {
      label: "Delivered Orders",
      value: 3
    },
    inPreparation: {
      label: "In preparation",
      value: 3
    }
  },
  year: {
    label: "Year",
    orders: {
      label: "Today Orders",
      value: 4
    },
    commission: {
      label: "Today Commission",
      value: 4
    },
    delivered: {
      label: "Delivered Orders",
      value: 4
    },
    inPreparation: {
      label: "In preparation",
      value: 4
    }
  }
};
const overviewdata = {
  users: {
    label: "Users",
    total: {
      label: "Total users",
      value: 1
    },

    active: {
      label: "Active users",
      value: 1
    },
    inactive: {
      label: "Inactive users",
      value: 1
    },
    joinedThisWeek: {
      label: "Joined this week",
      value: 1
    },
    joinedThisMonth: {
      label: "Joined this Month",
      value: 1
    },
    joinedThisYear: {
      label: "Joined this year",
      value: 1
    }
  },
  restaurants: {
    label: "Restaurants",
    total: {
      label: "Total retaurants",
      value: 2
    },

    active: {
      label: "Active retaurants",
      value: 2
    },
    inactive: {
      label: "Inactive retaurants",
      value: 2
    },
    pending: {
      label: "Pending retaurants",
      value: 2
    },
    joinedThisWeek: {
      label: "Joined this week",
      value: 2
    },
    joinedThisMonth: {
      label: "Joined this Month",
      value: 2
    },
    joinedThisYear: {
      label: "Joined this year",
      value: 2
    }
  },
  orders: {
    label: "Last 8 Orders",
    tableCaption: "List of the last 8 orders",
    tableHeader: [
      "Rest Id",
      "Rest name",
      "Order number",
      "Order Price",
      "Ordered at"
    ],
    table: [
      {
        id: 1,
        name: "Rest name",
        orderNumber: 1,
        price: "€ 16.00",
        orderDate: "11 Jan 2020 / 2:45 PM"
      },
      {
        id: 2,
        name: "Rest name 2",
        orderNumber: 2,
        price: "€ 13.00",
        orderDate: "12 Jan 2020 / 2:45 PM"
      },
      {
        id: 3,
        name: "Rest name 3",
        orderNumber: 3,
        price: "€ 14.00",
        orderDate: "13 Jan 2020 / 2:45 PM"
      },
      {
        id: 4,
        name: "Rest name 4",
        orderNumber: 4,
        price: "€ 111.00",
        orderDate: "14 Jan 2020 / 2:45 PM"
      },
      {
        id: 5,
        name: "Rest name 5",
        orderNumber: 5,
        price: "€ 14.00",
        orderDate: "15 Jan 2020 / 2:45 PM"
      }
    ]
  }
};
class DashboardContainer extends Component {
  render = () => {
    return (
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
        <div className="row">
          <Overview data={overviewdata} title="Overview" />
          <Statistics data={data} title="Orders statistics" />
        </div>
      </div>
    );
  };
}

export default DashboardContainer;
