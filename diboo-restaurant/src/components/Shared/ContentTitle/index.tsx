import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const Title: React.SFC<Props> = ({ title, children }) => (
  
      <div className="col-sm-6">
        <h4 className="page-title">{title}</h4>
        {children}
      </div>
  
);

export default Title;
