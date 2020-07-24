import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: React.SFC<Props> = ({ children }) => <>{children}</>;

export default Layout;
