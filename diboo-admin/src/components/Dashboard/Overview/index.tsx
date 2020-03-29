import React, { ReactNode } from "react";
interface Props {
  title: string;
  data: any;
}

const Overview: React.SFC<Props> = ({ title, data }) => (
  <div className="col-xl-8">
    <div className="card">
      <div className="card-body">
        <h4 className="mt-0 header-title mb-4">{title}</h4>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#users"
              role="tab"
              aria-selected="false"
            >
              <span className="d-block d-sm-none">
                <i className="fas fa-home"></i>
              </span>
              <span className="d-none d-sm-block">{data.users.label}</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#restaurants"
              role="tab"
              aria-selected="false"
            >
              <span className="d-block d-sm-none">
                <i className="far fa-user"></i>
              </span>
              <span className="d-none d-sm-block">
                {data.restaurants.label}
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#orders"
              role="tab"
              aria-selected="false"
            >
              <span className="d-block d-sm-none">
                <i className="far fa-envelope"></i>
              </span>
              <span className="d-none d-sm-block">{data.orders.label}</span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="users"
            role="tabpanel"
            aria-labelledby="nav-first-tab"
          >
            <div className="p-2 mt-2">
              <ul className="list-unstyled latest-message-list mb-0">
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.users.total.value}
                      </p>
                      <h6 className="mt-0">{data.users.total.label}</h6>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.users.active.value}
                      </p>
                      <h6 className="mt-0">{data.users.active.label}</h6>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.users.inactive.value}
                      </p>
                      <h6 className="mt-0">{data.users.inactive.label}</h6>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.users.joinedThisWeek.value}
                      </p>
                      <h6 className="mt-0">
                        {data.users.joinedThisWeek.label}
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.users.joinedThisMonth.value}
                      </p>
                      <h6 className="mt-0">
                        {data.users.joinedThisMonth.label}
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.users.joinedThisYear.value}
                      </p>
                      <h6 className="mt-0">
                        {data.users.joinedThisYear.label}
                      </h6>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="tab-pane fade show "
            id="restaurants"
            role="tabpanel"
            aria-labelledby="nav-first-tab"
          >
            <div className="p-2 mt-2">
              <ul className="list-unstyled latest-message-list mb-0">
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.restaurants.total.value}
                      </p>
                      <h6 className="mt-0">{data.restaurants.total.label}</h6>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.restaurants.active.value}
                      </p>
                      <h6 className="mt-0">{data.restaurants.active.label}</h6>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.restaurants.inactive.value}
                      </p>
                      <h6 className="mt-0">
                        {data.restaurants.inactive.label}
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.restaurants.pending.value}
                      </p>
                      <h6 className="mt-0">{data.restaurants.pending.label}</h6>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.restaurants.joinedThisWeek.value}
                      </p>
                      <h6 className="mt-0">
                        {data.restaurants.joinedThisWeek.label}
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.restaurants.joinedThisMonth.value}
                      </p>
                      <h6 className="mt-0">
                        {data.restaurants.joinedThisMonth.label}
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media-body">
                      <p className="float-right font-12 text-muted">
                        {data.restaurants.joinedThisYear.value}
                      </p>
                      <h6 className="mt-0">
                        {data.restaurants.joinedThisYear.label}
                      </h6>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="tab-pane fade show "
            id="orders"
            role="tabpanel"
            aria-labelledby="nav-first-tab"
          >
            <div className="table-responsive">
              <table className="table mb-0">
                <caption>{data.orders.tableCaption}</caption>
                <thead>
                  <tr>
                   {
                       data.orders.tableHeader.map((elem:string) => (
                           <th>{elem}</th>
                       ))
                   }
                  </tr>
                </thead>
                <tbody>
                  {data.orders.table.map((elem: any) => {
                    return (
                      <tr>
                        <th scope="row">{elem.id}</th>
                        <td>{elem.name}</td>
                        <td>{elem.orderNumber}</td>
                        <td>{elem.price}</td>
                        <td>{elem.orderDate}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Overview;
