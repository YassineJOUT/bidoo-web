import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

const Layout: React.SFC<Props> = ({ children }) => (
    <div>

                { children }
    </div>
);

export default Layout;
