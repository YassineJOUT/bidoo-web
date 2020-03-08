import React, { ReactNode } from "react";
import Header from "../Components/Header";

type Props = {
  children: ReactNode;
};

const Layout: React.SFC<Props> = ({ children }) => (
  <div>
    <Header />

    <div className="page-content d-flex align-items-stretch">{children}</div>
  </div>
);

export default Layout;
