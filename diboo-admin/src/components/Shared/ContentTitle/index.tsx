import React, { ReactNode } from 'react';

type Props = {
  title: string
}

const Title: React.SFC<Props> = ({ title }) => (
    <div className="page-title-box">
    <div className="row align-items-center">
      <div className="col-sm-6">
        <h4 className="page-title">{title}</h4>
      </div>
    </div>
    </div>
);

export default Title;
