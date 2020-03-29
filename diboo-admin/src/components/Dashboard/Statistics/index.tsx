import React, { ReactNode } from "react";
interface Props{
    data: any,
    title: string
}

const Statistics: React.SFC<Props> = ({data,title}) => (
  <div className="col-xl-4">
    <div className="card messages">
      <div className="card-body">
        <h4 className="mt-0 header-title mb-4">{title} </h4>
        <nav>
          <div
            className="nav nav-tabs messages-tabs tab-wid nav-justified"
            role="tablist"
          >
            <a
              className="nav-item nav-link active"
              id="nav-first-tab"
              data-toggle="tab"
              href="#nav-first"
              role="tab"
              aria-controls="nav-first"
              aria-selected="false"
            >
              <p className="text-muted mb-0">{data.today.label}</p>
            </a>
            <a
              className="nav-item nav-link"
              id="nav-second-tab"
              data-toggle="tab"
              href="#nav-second"
              role="tab"
              aria-controls="nav-second"
              aria-selected="false"
            >
              <p className="text-muted mb-0">{data.week.label}</p>
            </a>
            <a
              className="nav-item nav-link"
              id="nav-third-tab"
              data-toggle="tab"
              href="#nav-third"
              role="tab"
              aria-controls="nav-first"
              aria-selected="false"
            >
              <p className="text-muted mb-0">{data.month.label}</p>
            </a>
            <a
              className="nav-item nav-link "
              id="nav-fourth-tab"
              data-toggle="tab"
              href="#nav-fourth"
              role="tab"
              aria-controls="nav-second"
              aria-selected="true"
            >
              <p className="text-muted mb-0">{data.year.label}</p>
            </a>
          </div>
        </nav>
        <div className="tab-content">
          <div
            className="tab-pane fade"
            id="nav-first"
            role="tabpanel"
            aria-labelledby="nav-first-tab"
          >
            <div className="p-2 mt-2">
              <ul className="list-unstyled latest-message-list mb-0">
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.today.orders.value}</p>
                        <h6 className="mt-0">{data.today.orders.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.today.commission.value}</p>
                        <h6 className="mt-0">{data.today.commission.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.today.delivered.value}</p>
                            <h6 className="mt-0">{data.today.delivered.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.today.inPreparation.value}</p>
                        <h6 className="mt-0">{data.today.inPreparation.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="nav-second"
            role="tabpanel"
            aria-labelledby="nav-first-tab"
          >
            <div className="p-2 mt-2">
              <ul className="list-unstyled latest-message-list mb-0">
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.week.orders.value}</p>
                        <h6 className="mt-0">{data.week.orders.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.week.commission.value}</p>
                        <h6 className="mt-0">{data.week.commission.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.week.delivered.value}</p>
                        <h6 className="mt-0">{data.week.delivered.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.week.inPreparation.value}</p>
                        <h6 className="mt-0">{data.week.inPreparation.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="nav-third"
            role="tabpanel"
            aria-labelledby="nav-first-tab"
          >
            <div className="p-2 mt-2">
              <ul className="list-unstyled latest-message-list mb-0">
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.month.orders.value}</p>
                        <h6 className="mt-0">{data.month.orders.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.month.commission.value}</p>
                        <h6 className="mt-0">{data.month.commission.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.month.delivered.value}</p>
                        <h6 className="mt-0">{data.month.delivered.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.month.inPreparation.value}</p>
                        <h6 className="mt-0">{data.month.inPreparation.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="tab-pane fade show active"
            id="nav-fourth"
            role="tabpanel"
            aria-labelledby="nav-first-tab"
          >
            <div className="p-2 mt-2">
              <ul className="list-unstyled latest-message-list mb-0">
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.year.orders.value}</p>
                        <h6 className="mt-0">{data.year.orders.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                      <p className="float-right font-12 text-muted">{data.year.commission.value}</p>
                        <h6 className="mt-0">{data.year.commission.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                      <p className="float-right font-12 text-muted">{data.year.delivered.value}</p>
                        <h6 className="mt-0">{data.year.delivered.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-list-item">
                  <a href="#">
                    <div className="media">
                      <div className="media-body">
                        <p className="float-right font-12 text-muted">{data.year.inPreparation.value}</p>
                        <h6 className="mt-0">{data.year.inPreparation.label}</h6>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Statistics;
